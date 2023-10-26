import jwt from 'jsonwebtoken'
import { verifyToken } from '../utils/jwt.utils.js'
const TOKEN_SECRET_KEY = process.env.TOKEN_SECRET_KEY

export default (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1]

  if (!token) {
    return res.status(401).json({
      error: "Don't have token",
    })
  }

  verifyToken(token, (error, decodedToken) => {
    if (error) {
      return res.status(401).json({
        error: 'Invalid token',
      })
    }

    req.body.uuid = decodedToken.uuid
    req.body.rol = decodedToken.rol

    next()
  })
}
