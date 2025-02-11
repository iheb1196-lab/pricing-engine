"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.evaluateConditions = exports.evaluateCondition = void 0;
const evaluateCondition = (customerData, condition) => {
    const { field, operator, value } = condition;
    switch (operator) {
        case '==': return customerData[field] === value;
        case '!=': return customerData[field] !== value;
        case '>': return customerData[field] > value;
        case '<': return customerData[field] < value;
        default: return false;
    }
};
exports.evaluateCondition = evaluateCondition;
const evaluateConditions = (customerData, conditions) => conditions.every(condition => (0, exports.evaluateCondition)(customerData, condition));
exports.evaluateConditions = evaluateConditions;
