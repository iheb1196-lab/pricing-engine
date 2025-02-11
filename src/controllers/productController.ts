import { Request, Response } from 'express';
import Product from '../models/Product';
import { calculateFinalQuote } from '../services/PricingEngine';
import { IProduct } from '../types/Product';
import  {  Document } from 'mongoose';

export const getProduct = async (req: Request, res: Response): Promise<void> => {
  try {
   //onst product = await Product.findById(req.params.productId);// 
    const product : IProduct | null = await Product.findOne({id:req.params.productId}) // i am using this because in the instructions you speicfied Id 
    if (!product) {
      res.status(404).json({ message: 'Product not found' });
      return;
    }
    res.json(product);
  } catch (error) {
    const err = error as Error;
    res.status(500).json({ error: err.message });
  }
};

export const createProduct = async (req: Request, res: Response): Promise< void> => {
    try {
      const product:IProduct & Document = new Product(req.body);
      await product.save();
      res.status(201).json(product); // Explicit return
    } catch (error) {
      const err = error as Error;
       res.status(400).json({ error: err.message });
    }
  };

export const calculateQuote = async (req: Request, res: Response): Promise<void> => {
  try {
  //const product = await Product.findById(req.params.productId);
  const product : IProduct  | null = await Product.findOne({id:req.params.productId}) 
    if (!product) {
      res.status(404).json({ message: 'Product not found' });
      return;
    }
    const finalQuote: number = calculateFinalQuote(product, req.body);

    res.status(200).json({ finalQuote });
  } catch (error) {
    const err = error as Error;
    res.status(500).json({ error: err.message });
  }
};

  
