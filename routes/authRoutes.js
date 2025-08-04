import express from 'express'
import { login, register, user, verifyAccount } from '../controllers/authcontroller.js'
import authMiddleware from '../middleware/authMiddleware.js'

const router = express.Router()

// rutas de autentificación y registro de usuarios
router.post('/register', register )
router.get('/verify/:token', verifyAccount)
router.post('/login', login)

// area privada- requiere autentificación con JWT

router.get('/user', authMiddleware, user)



export default router