"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupSwagger = void 0;
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Pricing Engine Documentation',
        version: '1.0.0',
        description: 'API documentation for the Pricing Engine Backend',
    },
    servers: [
        {
            url: 'http://localhost:5000',
            description: 'Development server'
        }
    ]
};
// Options for Swagger Docs
const options = {
    swaggerDefinition,
    apis: ['./src/routes/*.ts'] // Path to your route files where Swagger comments exist
};
// Generate Swagger Docs
const swaggerSpec = (0, swagger_jsdoc_1.default)(options);
// Function to setup Swagger in the app
const setupSwagger = (app) => {
    app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerSpec));
    console.log('✅ Swagger docs available at http://localhost:5000/api-docs');
};
exports.setupSwagger = setupSwagger;
