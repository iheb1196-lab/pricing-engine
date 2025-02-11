import express from 'express';
import { getProduct, createProduct, calculateQuote } from '../controllers/productController';

const router = express.Router();

/**
 * @swagger
 * /products/{productId}:
 *   get:
 *     summary: Retrieve a single product
 *     description: Get product details by its ID.
 *     parameters:
 *       - in: path
 *         name: productId
 *         required: true
 *         schema:
 *           type: string
 *         description: The product ID
 *     responses:
 *       200:
 *         description: Product found
 *       404:
 *         description: Product not found
 */
router.get('/:productId', getProduct);

/**
 * @swagger
 * /products:
 *   post:
 *     summary: Create a new product
 *     description: Add a new product with rules.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: number
 *                 example: 1
 *               basePrice:
 *                 type: number
 *                 example: 100
 *               rules:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     conditions:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           field:
 *                             type: string
 *                             example: "age"
 *                           operator:
 *                             type: string
 *                             example: ">"
 *                           value:
 *                             type: number
 *                             example: 25
 *                     operation:
 *                       type: object
 *                       properties:
 *                         field:
 *                           type: string
 *                           example: "discount"
 *                         operator:
 *                           type: string
 *                           example: "-"
 *                         value:
 *                           type: number
 *                           example: 10
 *     responses:
 *       201:
 *         description: Product created successfully
 */
router.post('/', createProduct);

/**
 * @swagger
 * /products/{productId}/calculate:
 *   post:
 *     summary: Calculate final product price
 *     description: Computes the final quote after applying pricing rules.
 *     parameters:
 *       - in: path
 *         name: productId
 *         required: true
 *         schema:
 *           type: string
 *         description: The product ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               age:
 *                 type: number
 *                 example: 30
 *               membership:
 *                 type: string
 *                 example: "premium"
 *               purchaseAmount:
 *                 type: number
 *                 example: 600
 *     responses:
 *       200:
 *         description: Final quote calculated
 *       404:
 *         description: Product not found
 */
router.post('/:productId/calculate', calculateQuote);

export default router;
