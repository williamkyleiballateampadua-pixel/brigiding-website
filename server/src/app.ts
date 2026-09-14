import express, { Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import path from 'path';
import apiRouter from './routes';

// Load environment variables from root .env file
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

const app = express();
const PORT = process.env.PORT || 5000;

// Security & Middleware
app.use(helmet());
app.use(cors({ origin: process.env.CLIENT_ORIGIN || 'http://localhost:5173', credentials: true }));
app.use(express.json());
app.use(morgan('dev'));

// Base Health Check
app.get('/api/health', (req: Request, res: Response) => {
  res.json({
    status: 'ok',
    service: 'Brigiding Official Platform REST API',
    version: '1.0.0',
    timestamp: new Date().toISOString(),
  });
});

// Mount Version 1 REST API Domains
app.use('/api/v1', apiRouter);

// App listener (only when not running as Vercel serverless function)
if (process.env.NODE_ENV !== 'production' || !process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`🚀 Brigiding REST API running on http://localhost:${PORT}`);
  });
}

export default app;
