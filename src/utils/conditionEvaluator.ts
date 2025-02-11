import { Condition } from '../types/Condition';

export const evaluateCondition = (customerData: any, condition: Condition): boolean => {
  const { field, operator, value } = condition;
  switch (operator) {
    case '==': return customerData[field] === value;
    case '!=': return customerData[field] !== value;
    case '>': return customerData[field] > value;
    case '<': return customerData[field] < value;
    default: return false;
  }
};

export const evaluateConditions = (customerData: any, conditions: Condition[]): boolean =>
  conditions.every(condition => evaluateCondition(customerData, condition));