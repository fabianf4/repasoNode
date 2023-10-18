import { validateUser, validatePartialUser } from '../schemas/user.schema.js'

export class UserController {
  // constructor(userModel) {
  //   this.userModel = userModel
  // }

  addUser = async (req, res) => {
    const user = validateUser(req.body)

    if (!user.success) {
      res.status(400).json({ message: 'Invalid user', errors: user.error })
      return
    }

    res.json({ message: 'addUser' })
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
    res.json({ message: 'getUsers' })
  }
}
