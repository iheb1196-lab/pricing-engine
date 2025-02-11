"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateFinalQuote = void 0;
const conditionEvaluator_1 = require("../utils/conditionEvaluator");
const operationExecutor_1 = require("../utils/operationExecutor");
const calculateFinalQuote = (product, customerData) => product.rules.reduce((quote, rule) => (0, conditionEvaluator_1.evaluateConditions)(customerData, rule.conditions) ? (0, operationExecutor_1.applyOperation)(quote, rule.operation) : quote, product.basePrice);
exports.calculateFinalQuote = calculateFinalQuote;
