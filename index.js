import express from 'express';
import cors from 'cors';
import taskRoutes from './routes/taskRoutes.js';
import notFound from './controllers/notFound.js';
import connectWithDb from './config/database.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// cors
app.use(cors());

// middleware
app.use(express.json());

// importing routes
app.use("/api/v1", taskRoutes);

// Catch-all for undefined routes
app.use(notFound);


// database connectiona
connectWithDb();

// STARTING THE SERVER
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

