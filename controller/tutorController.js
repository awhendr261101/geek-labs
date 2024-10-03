import express from 'express'
import bodyParser from 'body-parser'
import { Sessions } from '../model/sessions.js'
import { User } from '../model/users.js'
import { Bookings } from '../model/bookings.js'
import { Tutors } from '../model/tutors.js' 

const tutorRouter = express.Router()

tutorRouter.use(bodyParser.json())

tutorRouter.get('/', (req, res) => { 
    Tutors.fetchAllTutors(req, res)
})

tutorRouter.get('/:id', (req, res) => { 
    User.fetchUser(req, res)
})

tutorRouter.post('/register', (req, res) => { 
    Tutors.registerTutor(req, res)
})

tutorRouter.get('/:id/bookings/', (req, res) => {  
    Bookings.fetchBooking(req, res)
})

tutorRouter.patch('/:id/booking/:sID', (req, res) => {        
    Bookings.updateBooking(req, res)
})

tutorRouter.patch('/:id/sessions/:sid', (req, res) => {
    User.updateSession(req,res)
})

tutorRouter.get('/:id/sessions', (req, res) => {
    Sessions.fetchTutorSessions(req,res)
})




export { 
    express,
    tutorRouter
}