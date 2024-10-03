import express from 'express'
import bodyParser from 'body-parser'
import { Sessions } from '../model/sessions.js'
import { User } from '../model/users.js'
import { Bookings } from '../model/bookings.js'
import { Tutee } from '../model/tutees.js'


const userRouter = express.Router()
const tuteeRouter = express.Router()

userRouter.use(bodyParser.json())
tuteeRouter.use(bodyParser.json())

userRouter.get('/', (req, res) => { 
    User.fetchAllUsers(req, res)
})

userRouter.get('/:id', (req, res) => { 
    User.fetchUser(req, res)
})

userRouter.patch('/:id', (req, res) => { 
    User.updateUser(req, res)
})

userRouter.delete('/:id', (req, res) => { 
    User.deleteUser(req, res)
})

userRouter.post('/login', (req, res) => { 
    User.login(req, res)
})


userRouter.get('/:id/bookings/', (req, res) => {  
    Bookings.fetchBooking(req, res)
})


userRouter.patch('/:id/booking/:sID', (req, res) => {        
    Bookings.updateBooking(req, res)
})

userRouter.patch('/:id/sessions/:sid', (req, res) => {
    User.updateSession(req,res)
})






export { 
    express,
    userRouter,
    tuteeRouter
}