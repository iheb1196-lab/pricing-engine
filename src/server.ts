import express from 'express';
import dotenv from 'dotenv';
//import { Database } from './config/database';

dotenv.config();

const app = express();
const PORT: number = Number(process.env.PORT) || 5000;

app.use(express.json());

//Database.getInstance(); // Initialize singleton DB connection

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
