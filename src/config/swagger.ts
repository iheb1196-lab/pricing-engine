import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Express } from 'express';

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
const swaggerSpec = swaggerJSDoc(options);

// Function to setup Swagger in the app
export const setupSwagger = (app: Express) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  console.log('✅ Swagger docs available at http://localhost:5000/api-docs');
};
