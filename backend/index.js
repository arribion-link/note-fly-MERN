import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { connectDB } from './src/config/db.js';

const app = express();
const port = process.env.PORT;

// routes
import noteRouter from './src/routes/note.Route.js';
import ratelimiter from './src/middlewares/Ratelimit/rate.Limiter.js';

// middlawares
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use(ratelimiter)


// path
app.get('/', (req, res) => {
    res.send('arribion technologies agency')
})

// routers
app.use('/api', noteRouter)

const initializeApp = async () => {
    try {
        await connectDB()
        app.listen(port, () => {
        })
    } catch (err) {
        console.error("app failed", err)
    }
}

initializeApp()