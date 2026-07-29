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





// const corsOptions = {
//     origin: 'https://mernappecommerce-dashboard-git-9efd06-carlos-projects-b4082f29.vercel.app',
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     credentials: true, // Allow cookies if needed
//     optionsSuccessStatus: 204
// };

// // Use CORS middleware BEFORE your routes
// app.use(cors(corsOptions))
app.use(cors({
    origin: 'https://mernappecommerce-dashboard-3hh2bvrlo-carlos-projects-b4082f29.vercel.app',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));





await connectDB()
app.use(express.json())
const port = process.env.PORT || 5000
app.get('/', (req: Request, res: Response) => {
    res.send('server running')
})

app.use('/api/auth', authRouter)
app.use('/api/restaurants', restaurantRouter)
app.use('/api/bookings', bookingRouter)
app.use('/api/owner', ownerRouter)
app.use('/api/admin', adminRouter)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error('unhandle error', err)
    res.status(500).json({
        message: err.message || 'internal server error',
        stack: process.env.NODE_ENV === 'production' ? undefined : err.stack
    })
})
app.listen(port, () => {
    console.log(`server running ${port}`)
})