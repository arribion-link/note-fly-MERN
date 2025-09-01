import mongoose from 'mongoose';
import { configDotenv } from 'dotenv';
configDotenv()
//Set up default mongoose connection
const MONGO_URI = process.env.MONGO_URI
if (!MONGO_URI) {
    console.error("error fetching database connection string..");
}
const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI,
            {
                useNewUrlParser: true,
                useUnfiedTopology: true
             });
        console.log('database connected successfully...');
    } catch (err) {
        console.error('error connecting to database');
    }
}

export default connectDB