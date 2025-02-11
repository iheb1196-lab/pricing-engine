import express from 'express';
import { getProduct, createProduct, calculateQuote } from '../controllers/productController';

const router = express.Router();

// Define routes correctly
router.get('/:productId', getProduct);
router.post('/', createProduct);
router.post('/:productId/calculate', calculateQuote);

export default router;
