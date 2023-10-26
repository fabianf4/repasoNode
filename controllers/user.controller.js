import crypto from 'node:crypto'
import bcryptjs from 'bcryptjs'

const ENCRYPT_SALT = parseInt(process.env.ENCRYPT_SALT)

export default class UserController {
  constructor(userModel) {
    this.userModel = userModel
  }

  addUser = async (req, res) => {
    const { name, lastName, email, password } = req.body
    const uuid = crypto.randomUUID()

    const user = await this.userModel.findUserByEmail(email)

    if (user) {
      return res.json({ error: 'Email already registered' })
    }

    const info = await this.userModel.create({
      uuid,
      name,
      lastName,
      email,
      password: await bcryptjs.hash(password, ENCRYPT_SALT),
    })

    if (info) {
      res.json({ message: 'User created successfully' })
    } else {
      res.json({ error: 'Error creating user' })
    }
  }

  updateUser = async (req, res) => {
    res.json({ message: 'updateUser' })
  }

  deleteUser = async (req, res) => {
    res.json({ message: 'deleteUser' })
  }

  getUser = async (req, res) => {
    res.json({ message: 'getUser' })
  }

  getUsers = async (req, res) => {
    const users = await this.userModel.getAllUsers()

    if (users) {
      return res.json({ message: 'Users find', data: users })
    } else {
      return res.json({ error: 'Users not found' })
    }
  }
}
