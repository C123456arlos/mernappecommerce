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

await connectDB()
app.use(express.json())
const port = process.env.PORT || 5000
app.get('/', (req: Request, res: Response) => {
    res.send('server running')
})

app.use(cors({
    origin: ['http://localhost:3000', 'https://mernappecommerce-dashboard-app-eight.vercel.app/', 'http://localhost:5173'],

    // origin: ENV.CLIENT_URL,
    credentials: true
}))

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