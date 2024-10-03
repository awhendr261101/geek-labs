import express from 'express'
import bodyParser from 'body-parser'
import { Bookings } from '../model/bookings.js'
import { verifyAToken } from '../middleware/authenticateUser.js'

const bookingsRouter = express.Router()

bookingsRouter.use(bodyParser.json())

bookingsRouter.get('/', (req, res) => {
    Bookings.fetchBookings(req, res)
})

bookingsRouter.get('/:id', (req, res) => {
    Bookings.fetchBookings(req, res)
})

bookingsRouter.post('/add', (req, res) => {
    Bookings.addBookings(req, res)
})

bookingsRouter.patch('/:id', (req, res) => {
    Bookings.updateBooking(req, res)
})

bookingsRouter.delete('/:id', (req, res) => {
    Bookings.deleteBooking(req, res)
})


export {
    bookingsRouter
}
