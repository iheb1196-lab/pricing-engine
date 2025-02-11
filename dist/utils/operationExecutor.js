"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyOperation = void 0;
const applyOperation = (quote, operation) => {
    switch (operation.operator) {
        case '+': return quote + operation.value;
        case '-': return quote - operation.value;
        case '*': return quote * operation.value;
        case '/': return quote / operation.value;
        default: return quote;
    }
};
exports.applyOperation = applyOperation;
