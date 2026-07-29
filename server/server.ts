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




// app.use(
//     cors({
//         origin: ["mernappecommerce-dashboard-ic1rvhtpu-carlos-projects-b4082f29.vercel.app", "mernappecommerce-dashboard-app-eight.vercel.app", 'https://mernappecommerce-server-pzc228i2v-carlos-projects-b4082f29.vercel.app/api/restaurants/featured',
//             "http://localhost:5173"
//         ],
//         credentials: false,
//     })
// );

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "https://mernappecommerce-dashboard-ic1rvhtpu-carlos-projects-b4082f29.vercel.app")
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");

    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }
    next();
});





































































// const allowedOrigins = [
//     'https://mernappecommerce-dashboard-ae4v3yhrx-carlos-projects-b4082f29.vercel.app',
//     'https://mernappecommerce-dashboard-git-9efd06-carlos-projects-b4082f29.vercel.app',
//     'http://localhost:3000' // Include for local development
// ];

// app.use(cors({
//     origin: function (origin, callback) {
//         // Allow requests with no origin (like mobile apps or curl requests)
//         if (!origin) return callback(null, true);

//         if (allowedOrigins.indexOf(origin) !== -1) {
//             callback(null, true);
//         } else {
//             callback(new Error('Not allowed by CORS'));
//         }
//     },
//     credentials: true // Allow cookies or authorization headers if needed
// }));















const corsOptions = {
    origin: 'https://mernappecommerce-dashboard-2ulnvmp5d-carlos-projects-b4082f29.vercel.app',
    optionsSuccessStatus: 200
};

// Apply CORS middleware before your API routes
app.use(cors(corsOptions));


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