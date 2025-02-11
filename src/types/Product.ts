import { Rule } from './Rule';

export interface IProduct  {
 id:number;
  basePrice: number;
  rules: Rule[];
}
