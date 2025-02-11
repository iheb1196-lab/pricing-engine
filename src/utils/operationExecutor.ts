import { Operation } from '../types/Operation';

export const applyOperation = (quote: number, operation: Operation): number => {
  switch (operation.operator) {
    case '+': return quote + operation.value;
    case '-': return quote - operation.value;
    case '*': return quote * operation.value;
    case '/': return quote / operation.value;
    default: return quote;
  }
};
