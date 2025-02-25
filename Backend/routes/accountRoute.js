import express from 'express'
import accountController from '../controllers/accountController'

const router = express.Router()

router.post('/register', accountController.CreateAccount)
router.post('/login', accountController.LoginAccount)
