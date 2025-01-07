import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { emailRouter } from './routes/email.js';
import { paymentRouter } from './routes/payment.js';
import { setupDatabase } from './database/setup.js';

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/email', emailRouter);
app.use('/api/payment', paymentRouter);

// Initialize database
setupDatabase();

// Start server
app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});