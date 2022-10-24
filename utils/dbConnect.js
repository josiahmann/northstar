import mongoose from "mongoose";
const connection = {};

const dbConnect = async () => {
    if (mongoose.connection.readyState >= 1) {
        return;
    }
    
    const db = await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    console.log(connection.isConnected);
    connection.isConnected = db.connections[0].readyState;
}   

export default dbConnect;
