"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const database_1 = require("./config/database");
const productRoutes_1 = __importDefault(require("./routes/productRoutes"));
const swagger_1 = require("./config/swagger"); // Import Swagger setup
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = Number(process.env.PORT) || 5000;
app.use(express_1.default.json());
app.use(express_1.default.json());
app.use('/products', productRoutes_1.default);
database_1.Database.getInstance(); // Initialize singleton DB connection
(0, swagger_1.setupSwagger)(app);
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
