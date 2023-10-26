import jwt from 'jsonwebtoken'

const TOKEN_SECRET_KEY = process.env.TOKEN_SECRET_KEY
const DURATION_TOKEN = parseInt(process.env.DURATION_TOKEN)

const REFRESH_TOKEN_SECRET_KEY = process.env.REFRESH_TOKEN_SECRET_KEY
const DURATION_REFRESH_TOKEN = parseInt(process.env.DURATION_REFRESH_TOKEN)

export function verifyToken(token, callback) {
  jwt.verify(token, TOKEN_SECRET_KEY, callback)
}

export function verifyRefreshToken(token, callback) {
  jwt.verify(token, REFRESH_TOKEN_SECRET_KEY, callback)
}

export function generateToken(payload) {
  return jwt.sign(payload, TOKEN_SECRET_KEY, { expiresIn: DURATION_TOKEN })
}

export function generateRefreshToken(payload) {
  const token = jwt.sign(payload, REFRESH_TOKEN_SECRET_KEY, {
    expiresIn: DURATION_REFRESH_TOKEN,
  })

  return { refreshToken: token, expiresIn: DURATION_REFRESH_TOKEN }
}
