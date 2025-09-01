import mongoose from 'mongoose';
import { configDotenv } from 'dotenv';
configDotenv()
//Set up default mongoose connection
const MONGO_URI = process.env.MONGO_URI
if (!MONGO_URI) {
    console.error("error fetching database connection string..");
}
export const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log('Database connected successfully...');
    } catch (err) {
        console.error('error connecting to database');
        process.exit(1);
    }
}

export default connectDB