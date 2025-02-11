import mongoose, { Schema, Document, Model } from 'mongoose';
import { IProduct } from '../types/Product';


// Define the Rule schema inside Product schema
const RuleSchema = new Schema({
  conditions: [
    {
      field: { type: String, required: true },
      operator: { type: String, enum: ['>', '<', '==', '!='], required: true },
      value: { type: Schema.Types.Mixed, required: true },
      type: { type: String, enum: ['AND', 'OR'], required: false }
    }
  ],
  operation: {
    field: { type: String, required: true },
    operator: { type: String, enum: ['+', '-', '*', '/'], required: true },
    value: { type: Number, required: true }
  }
});

// Define the Product Schema
const ProductSchema: Schema = new Schema({
  id: { type: Number, required: true, unique: true }, // Manually assigned unique ID
  basePrice: { type: Number, required: true },
  rules: { type: [RuleSchema], required: true } // Embedding RuleSchema
});

// Define the Product Model
export const Product: Model<IProduct & Document> = mongoose.model<IProduct & Document>('Product', ProductSchema);
export default Product;

