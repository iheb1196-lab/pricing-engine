import { IProduct } from "../types/Product";
import { evaluateConditions } from '../utils/conditionEvaluator';
import { applyOperation } from '../utils/operationExecutor';

type CustomerData = Record<string, any>;

export const calculateFinalQuote = (product: IProduct, customerData: CustomerData): number =>
  product.rules.reduce((quote, rule) =>
    evaluateConditions(customerData, rule.conditions) ? applyOperation(quote, rule.operation) : quote,
    product.basePrice
  );