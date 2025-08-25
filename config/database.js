import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const connectWithDb = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('Connected to the database successfully'))

    .catch((error) => {
        console.error('Error connecting to the database:', error);
        console.log(error);
        process.exit(1);
    })
};

export default connectWithDb;