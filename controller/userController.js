import express from 'express'
import bodyParser from 'body-parser'
import { Sessions } from '../model/sessions.js'
import { User } from '../model/users.js'
import { Bookings } from '../model/bookings.js'


const userRouter = express.Router()
userRouter.use(bodyParser.json())

userRouter.get('/', (req, res) => { 
    User.fetchAllUsers(req, res)
})

userRouter.get('/:id', (req, res) => { 
    User.fetchUser(req, res)
})

userRouter.post('/registerTutor', (req, res) => { 
    User.registerTutor(req, res)
})

userRouter.post('/registerTutee', (req, res) => { 
    User.registerTutee(req, res)
})

userRouter.patch('/:id', (req, res) => { 
    User.updateUser(req, res)
})

userRouter.delete('/:id', (req, res) => { 
    User.deletUser(req, res)
})

userRouter.post('/login', (req, res) => { 
    User.login(req, res)
})


userRouter.get('/:id/bookings/', (req, res) => {  
    Bookings.fetchBooking(req, res)
})

userRouter.patch('/:id/booking/:sID', (req, res) => {  
    console.log('here');
      
    Bookings.updateBooking(req, res)
})

export { 
    express,
    userRouter
}