import { Router } from 'express'
import { UserController } from '../controllers/user.controller.js'

const router = Router()

const userController = new UserController()

router.get('/', userController.getUsers)
router.get('/:uuid', userController.getUser)
router.post('/', userController.addUser)
router.patch('/:uuid', userController.updateUser)
router.delete('/:uuid', userController.deleteUser)

export default router
