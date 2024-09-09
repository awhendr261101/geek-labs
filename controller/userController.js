import express from 'express'
import bodyParser from 'body-parser'
import { users } from '../model/users.js'

const userRouter = express.Router()
userRouter.use(bodyParser.json())

userRouter.get('/', (req, res) => { 
    users.fetchUsers(req, res)
})

userRouter.get('/:id', (req, res) => { 
    users.fetchUser(req, res)
})

userRouter.post('/registerTutor', (req, res) => { 
    users.registerTutor(req, res)
})

userRouter.post('/registerTutee', (req, res) => { 
    users.registerTutee(req, res)
})

userRouter.patch('/:id', (req, res) => { 
    users.updateUser(req, res)
})

userRouter.delete('/:id', (req, res) => { 
    users.deleteUser(req, res)
})

userRouter.post('/login', (req, res) => { 
    users.login(req, res)
})

export { 
    express,
    userRouter
}