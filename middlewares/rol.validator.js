export default function rolValidator(roles) {
  return (req, res, next) => {
    const { rol: userRol } = req.body
    const existRole = roles.some((rol) => rol === userRol)

    if (existRole) {
      return next()
    }

    return res.status(404).json({
      error: 'Not found',
    })
  }
}

const validateRole = (arrayRole) => (req, res, next) => {
  const { role } = req.body

  const existRole = arrayRole.find((rol) => rol === role)

  if (!existRole) {
    return res.status(401).json({
      success: false,
      message: 'No tienes permisos suficientes',
    })
  }

  next()
}
