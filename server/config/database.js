import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn =await mongoose.connect(process.env.MONGO_DB_URL);
            console.log(`MongoDB connected on ${conn.connection.host}`)
    } catch (error) {
        console.error(error)
    }
}

export default connectDB;