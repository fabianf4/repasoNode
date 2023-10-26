import {
  generateToken,
  generateRefreshToken,
  verifyRefreshToken,
} from '../utils/jwt.utils.js'
import cookieParser from 'cookie-parser'
import bcrypt from 'bcryptjs'

export default class AuthController {
  constructor(userModel) {
    this.userModel = userModel
  }

  login = async (req, res) => {
    const { email, password } = req.body

    const user = await this.userModel.findUserByEmail(email)

    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' })
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)

    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid credentials' })
    }

    const { refreshToken, expiresIn } = generateRefreshToken({
      uuid: user.uuid,
    })

    console.log(new Date(Date.now()))

    const fechaActual = new Date()
    console.log(
      fechaActual.toLocaleString('es-ES', { timeZone: 'America/Bogota' })
    )

    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      expires: new Date(Date.now()),
    })

    res.status(200).json({ message: 'Login successful' })
  }
}
