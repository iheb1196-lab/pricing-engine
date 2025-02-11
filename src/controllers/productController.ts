import { Request, Response } from 'express';
import Product from '../models/Product';
import { calculateFinalQuote } from '../services/PricingEngine';

export const getProduct = async (req: Request, res: Response) => {
    try {
      const product = await Product.findById(req.params.productId);
      if (!product) return res.status(404).json({ message: 'Product not found' });
      res.json(product);
    } catch (error) {
      const err = error as Error; // Explicitly cast to Error
      res.status(500).json({ error: err.message });
    }
  };
  
  export const createProduct = async (req: Request, res: Response) => {
    try {
      const product = new Product(req.body);
      await product.save();
      res.status(201).json(product);
    } catch (error) {
      const err = error as Error; // Ensure error has 'message'
      res.status(400).json({ error: err.message });
    }
  };
  
  export const calculateQuote = async (req: Request, res: Response) => {
    try {
      const product = await Product.findById(req.params.productId);
      if (!product) return res.status(404).json({ message: 'Product not found' });
  
      const finalQuote = calculateFinalQuote(product, req.body);
      res.json({ finalQuote });
    } catch (error) {
      const err = error as Error; // Ensure proper error handling
      res.status(500).json({ error: err.message });
    }
  };
  
