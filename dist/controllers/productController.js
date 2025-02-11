"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateQuote = exports.createProduct = exports.getProduct = void 0;
const Product_1 = __importDefault(require("../models/Product"));
const PricingEngine_1 = require("../services/PricingEngine");
const getProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //onst product = await Product.findById(req.params.productId);// 
        const product = yield Product_1.default.findOne({ id: req.params.productId }); // i am using this because in the instructions you speicfied Id 
        if (!product) {
            res.status(404).json({ message: 'Product not found' });
            return;
        }
        res.json(product);
    }
    catch (error) {
        const err = error;
        res.status(500).json({ error: err.message });
    }
});
exports.getProduct = getProduct;
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = new Product_1.default(req.body);
        yield product.save();
        res.status(201).json(product); // Explicit return
    }
    catch (error) {
        const err = error;
        res.status(400).json({ error: err.message });
    }
});
exports.createProduct = createProduct;
const calculateQuote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //const product = await Product.findById(req.params.productId);
        const product = yield Product_1.default.findOne({ id: req.params.productId });
        if (!product) {
            res.status(404).json({ message: 'Product not found' });
            return;
        }
        const finalQuote = (0, PricingEngine_1.calculateFinalQuote)(product, req.body);
        res.status(200).json({ finalQuote });
    }
    catch (error) {
        const err = error;
        res.status(500).json({ error: err.message });
    }
});
exports.calculateQuote = calculateQuote;
