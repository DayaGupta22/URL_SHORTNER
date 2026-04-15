const mongoose = require('mongoose')
const connectDb = async () => {
    try {
        const connecInstance = await mongoose.connect(`${process.env.MONGO_URL}/urlshortner`)
        console.log("Database connected succesfully ")
        console.log(`MongoDB connected: ${connecInstance.connection.host}`);

    }
    catch (err) {
        console.error("connection failed", err);
        throw err;
    }
};
module.exports= connectDb