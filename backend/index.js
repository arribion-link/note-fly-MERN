import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { connectDB } from './src/config/db.js';

const app = express();
const port = process.env.PORT;

// middlawares
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

// routes
import noteRouter from './src/routes/note.Route.js';
// path
app.get('/', (req, res) => {
    res.send('arribion technologies agency')
})

app.use('/api', noteRouter)


app.listen(port, () => {
    connectDB()
    console.log(`http://localhost:${port}`);
});