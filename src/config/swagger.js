const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Landing Page Form API',
      version: '1.0.0',
      description: 'API documentation for the landing page form submission.',
    },
    servers: [
      {
        url: `http://${process.env.SERVER_ADDRESS}`,
        description: 'Development server',
      },
    ],
  },
  apis: ['./src/routes/*.js'], // Path to the API docs
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
