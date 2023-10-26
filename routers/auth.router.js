import { Router } from 'express'
import { userLoginSchema } from '../schemas/user.schema.js'
import validator from '../middlewares/data.validator.js'
import AuthController from '../controllers/auth.controller.js'
import { UserModel } from '../models/mysql/user.model.js'

const router = Router()

const authController = new AuthController(UserModel)

router.post('/login', validator(userLoginSchema), authController.login)

router.get('/refresh')

export default router
