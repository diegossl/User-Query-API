import express from 'express'
import UserController from '../app/controllers/UserController'

const router = express.Router()

router.get('/', UserController.index)
router.post('/register', UserController.save)

export default router
