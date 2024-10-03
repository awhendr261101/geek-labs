import express from 'express'
import bodyParser from 'body-parser'

import { Sessions } from '../model/sessions.js'

import { Tutee } from '../model/tutees.js'


const tuteeRouter = express.Router()

tuteeRouter.use(bodyParser.json())


tuteeRouter.get('/', (req, res) => { 
    Tutee.fetchAllTutees(req, res)
})

tuteeRouter.post('/register', (req, res) => { 
    Tutee.registerTutee(req, res)
})

tuteeRouter.get('/:id/sessions', (req, res) => {
    Sessions.fetchTuteeSessions(req, res)
}) 

tuteeRouter.patch('/:id/sessions/:sid', (req,res) => {
    Tutee.cancelBooking(req, res)
})


export { 
    express,
    tuteeRouter
}