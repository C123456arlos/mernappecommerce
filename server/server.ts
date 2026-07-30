// import 'dotenv/config'
// import express, { NextFunction, Request, Response } from 'express'
// import cors from 'cors'
// import connectDB from './config/db.js'
// import authRouter from './routes/authRoutes.js'
// import restaurantRouter from './routes/restaurantRoutes.js'
// import bookingRouter from './routes/bookingRoutes.js'
// import ownerRouter from './routes/ownerRoutes.js'
// import adminRouter from './routes/adminRoutes.js'
// const app = express()


// app.use(cors())

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', [
//         'https://mernappecommerce-dashboard-app-eight.vercel.app/', // Your production Vercel URL
//         'http://localhost:3000',
//         'http://localhost:5173',
//         'http://localhost:5000/api',
//         'http://localhost:5000',
//     ]);
//     res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
//     res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

//     if (req.method === 'OPTIONS') {
//         return res.sendStatus(200); // Intercept and reply to preflight
//     }
//     next();
// });
// app.options('*', cors());













































import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import connectDB from './config/db.js'
import authRouter from './routes/authRoutes.js'
import restaurantRouter from './routes/restaurantRoutes.js'
import bookingRouter from './routes/bookingRoutes.js'
import ownerRouter from './routes/ownerRoutes.js'
import adminRouter from './routes/adminRoutes.js'

const app = express()

// Connect to database
connectDB()

// Enable CORS safely for allowed origins
// const allowedOrigins = [
//     'https://mernappecommerce-dashboard-app-eight.vercel.app',
//     'http://localhost:3000',
//     'http://localhost:5173',
//     'http://localhost:5000'
// ]

// app.use(cors({
//     origin: allowedOrigins,
//     methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//     allowedHeaders: ['Content-Type', 'Authorization'],
//     credentials: true
// }))



app.use(cors({
    origin: 'https://mernappecommerce-dashboard-app-eight.vercel.app'
}));

// Mount Routers
app.use('/api/auth', authRouter)
app.use('/api/restaurants', restaurantRouter)
app.use('/api/bookings', bookingRouter)
app.use('/api/owners', ownerRouter)
app.use('/api/admin', adminRouter)

app.get('/', (req, res) => {
    res.send('API is running...')
})

// Export for Vercel
export default app








