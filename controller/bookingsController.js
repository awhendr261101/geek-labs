import express from 'express'
import bodyParser from 'body-parser'
import { bookings } from '../model/bookings.js'
import { verifyAToken } from '../middleware/authenticateUser.js'

const bookingsRouter = express.Router()

bookingsRouter.use(bodyParser.json())

bookingsRouter.get('/', (req, res) => {
    bookings.fetchBookings(req, res)
})

bookingsRouter.get('/:id', (req, res) => {
    bookings.fetchOneBooking(req, res)
})

bookingsRouter.post('/add', (req, res) => {
    bookings.addBooking(req, res)
})

bookingsRouter.patch('/:id', (req, res) => {
    bookings.updateBooking(req, res)
})

bookingsRouter.delete('/:id', (req, res) => {
    bookings.deleteBooking(req, res)
})

export {
    bookingsRouter
}
