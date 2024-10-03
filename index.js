import { userRouter,express } from './controller/userController.js'
import { tutorRouter } from './controller/tutorController.js'
import { bookingsRouter } from './controller/bookingsController.js'
import { tuteeRouter } from './controller/tuteeController.js'

import cors from 'cors'
import path from 'path'

// Create an express app
const app = express()
const port = +process.env.PORT || 8000
// Middleware
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Request-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Expose-Headers", "Authorization");

    next()
})


app.use('/users', userRouter)
app.use('/Bookings', bookingsRouter)
app.use('/tutees', tuteeRouter)
app.use('/tutors', tutorRouter)

app.use(
    express.static('./static'),
    express.json(),
    express.urlencoded({
        extended: true
    }),
    cors()
)

app.get('^/$|/geeklabs', (req, res) => {
    res.status(200).sendFile(path.resolve('./static/html/index.html'))
})

app.get('*', (req, res) => {
    res.json({
        status: 404,
        msg: 'Resource not found'
    })
})

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})