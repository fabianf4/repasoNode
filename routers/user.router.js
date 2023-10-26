import { Router } from 'express'
import UserController from '../controllers/user.controller.js'
import validator from '../middlewares/data.validator.js'
import { userSchema } from '../schemas/user.schema.js'
import { UserModel } from '../models/mysql/user.model.js'

const router = Router()

const userController = new UserController(UserModel)

router.post('/', validator(userSchema), userController.addUser)
router.get('/', userController.getUsers, userController.getUsers)
router.get('/:uuid', userController.getUser)
router.patch('/:uuid', userController.updateUser)
router.delete('/:uuid', userController.deleteUser)

export default router
