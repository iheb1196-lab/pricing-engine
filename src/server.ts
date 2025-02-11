import express from 'express';
import dotenv from 'dotenv';
import { Database } from './config/database';
import productRoutes from './routes/productRoutes';
import { setupSwagger } from './config/swagger'; // Import Swagger setup
dotenv.config();

const app = express();
const PORT: number = Number(process.env.PORT) || 5000;

app.use(express.json());
app.use(express.json());
app.use('/products', productRoutes);
Database.getInstance(); // Initialize singleton DB connection
setupSwagger(app);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
