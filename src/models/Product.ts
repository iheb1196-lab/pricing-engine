import mongoose, { Schema} from 'mongoose';
import { IProduct}  from '../types/Product';


const ProductSchema: Schema = new Schema({
  id : {type:Number, required: true , unique: true}, // in mongoose object id are generated automatically when creating new document but i am sticking to requirements
  basePrice: { type: Number, required: true },
  rules: { type: Array, required: true }
});

export default mongoose.model<IProduct>('Product', ProductSchema);
