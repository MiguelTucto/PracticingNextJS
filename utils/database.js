import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if (isConnected) {
        console.log("MongoDB is already connected.");
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "PracticingAuthDb",
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        isConnected = true;

        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log('MongoDB is connected successfully!');
        })

        connection.on('error', (error) => {
            console.log('MongoDB connection error. Please make sure MongoDB is running. ' + error)
            process.exit();
        })
    } catch (error) {
        console.log("Something goes wrong", error);
    }
}