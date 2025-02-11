import mongoose, { Schema} from 'mongoose';
import { IProduct}  from '../types/Product';


const ProductSchema: Schema = new Schema({
  basePrice: { type: Number, required: true },
  rules: { type: Array, required: true }
});

export default mongoose.model<IProduct>('Product', ProductSchema);
