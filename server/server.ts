import 'dotenv/config'
import express, { NextFunction, Request, Response } from 'express'
import cors from 'cors'
import connectDB from './config/db.js'
import authRouter from './routes/authRoutes.js'
import restaurantRouter from './routes/restaurantRoutes.js'
import bookingRouter from './routes/bookingRoutes.js'
import ownerRouter from './routes/ownerRoutes.js'
import adminRouter from './routes/adminRoutes.js'
const app = express()
// app.use(cors({
//     origin: ['https://mernappecommerce-dashboard-3hh2bvrlo-carlos-projects-b4082f29.vercel.app', 'http://localhost:5000/api'],
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     credentials: true
// }));



app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader("Access-Control-Allow-Origin", "*");

    // Request methods you wish to allow
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );

    // Request headers you wish to allow
    res.setHeader(
        "Access-Control-Allow-Headers",
        "X-Requested-With,content-type"
    );

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    // @ts-ignore
    res.setHeader("Access-Control-Allow-Credentials", true);

    // Pass to next layer of middleware
    next();
});


app.use('/api/auth', authRouter)
app.use('/api/restaurants', restaurantRouter)
app.use('/api/bookings', bookingRouter)
app.use('/api/owner', ownerRouter)
app.use('/api/admin', adminRouter)


await connectDB()
app.use(express.json())
const port = process.env.PORT || 5000
app.get('/', (req: Request, res: Response) => {
    res.send('server running')
})



// app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
//     console.error('unhandle error', err)
//     res.status(500).json({
//         message: err.message || 'internal server error',
//         stack: process.env.NODE_ENV === 'production' ? undefined : err.stack
//     })
// })
app.listen(port, () => {
    console.log(`server running ${port}`)
})