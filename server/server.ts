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

// import adminRouter from "./routes/adminRoutes.js";
// import authRouter from "./routes/authRoutes.js";
// import bookingRouter from "./routes/bookingRoutes.js";
// import ownerRouter from "./routes/ownerRoutes.js";
// import restaurantRouter from "./routes/restaurantRoutes.js";


// // app.use(cors())

// // app.use((req, res, next) => {
// //     res.header('Access-Control-Allow-Origin', [
// //         'https://mernappecommerce-dashboard-app-eight.vercel.app/', // Your production Vercel URL
// //         'http://localhost:3000',
// //         'http://localhost:5173',
// //         'http://localhost:5000/api',
// //         'http://localhost:5000',
// //     ]);
// //     res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
// //     res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

// //     if (req.method === 'OPTIONS') {
// //         return res.sendStatus(200); // Intercept and reply to preflight
// //     }
// //     next();
// // });
// // app.options('*', cors());




















// const express = require('express');
// const cors = require('cors');
// const app = express();

// const allowedOrigins = [
//     'https://mernappecommerce-dashboard-app-eight.vercel.app'
// ];

// app.use(cors({
//     origin: function (origin: any, callback: any) {
//         // Allow requests with no origin (like mobile apps or curl)
//         if (!origin) return callback(null, true);
//         if (allowedOrigins.indexOf(origin) === -1) {
//             const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
//             return callback(new Error(msg), false);
//         }
//         return callback(null, true);
//     },
//     methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//     allowedHeaders: ['Content-Type', 'Authorization'],
//     credentials: true
// }));

// // CRITICAL: Handle preflight requests globally
// app.options('*', cors());


// // Mount Routers
// app.use('/api/auth', authRouter)
// app.use('/api/restaurants', restaurantRouter)
// app.use('/api/bookings', bookingRouter)
// app.use('/api/owners', ownerRouter)
// app.use('/api/admin', adminRouter)

// app.get('/', (req, res) => {
//     res.send('API is running...')
// })

// // Export for Vercel
// export default app























// import 'dotenv/config'
// import express from 'express'
// import cors from 'cors'
// import connectDB from './config/db.js'
// import authRouter from './routes/authRoutes.js'
// import restaurantRouter from './routes/restaurantRoutes.js'
// import bookingRouter from './routes/bookingRoutes.js'
// import ownerRouter from './routes/ownerRoutes.js'
// import adminRouter from './routes/adminRoutes.js'

// const app = express()

// // Connect to database
// connectDB()




// const allowedOrigins = [
//     'https://mernappecommerce-dashboard-app-eight.vercel.app'
// ];

// app.use(cors({
//     origin: function (origin: any, callback: any) {
//         // Allow requests with no origin (like mobile apps or curl)
//         if (!origin) return callback(null, true);
//         if (allowedOrigins.indexOf(origin) === -1) {
//             const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
//             return callback(new Error(msg), false);
//         }
//         return callback(null, true);
//     },
//     methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//     allowedHeaders: ['Content-Type', 'Authorization'],
//     credentials: true
// }));

// // CRITICAL: Handle preflight requests globally
// app.options('*', cors());




// // Mount Routers
// app.use('/api/auth', authRouter)
// app.use('/api/restaurants', restaurantRouter)
// app.use('/api/bookings', bookingRouter)
// app.use('/api/owners', ownerRouter)
// app.use('/api/admin', adminRouter)

// app.get('/', (req, res) => {
//     res.send('API is running...')
// })

// // Export for Vercel
// export default app














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
const port = process.env.PORT || 5000
// Connect to database
connectDB()

// Enable CORS safely for allowed origins
const allowedOrigins = [
    'https://mernappecommerce-dashboard-app-eight.vercel.app',
    'http://localhost:3000',
    'http://localhost:5173',
    'http://localhost:5000'
]

app.use(cors({
    origin: allowedOrigins,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}))

// Mount Routers
app.use('/api/auth', authRouter)
app.use('/api/restaurants', restaurantRouter)
app.use('/api/bookings', bookingRouter)
app.use('/api/owners', ownerRouter)
app.use('/api/admin', adminRouter)




app.listen(port, () => {
    console.log(`server running ${port}`)
})

app.get('/', (req, res) => {
    res.send('API is running...')
})

app.listen(port, () => {
    console.log(`server running ${port}`)
})

// Export for Vercel
export default app

