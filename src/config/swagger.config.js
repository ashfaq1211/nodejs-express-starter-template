export default {
    options: {
      encoding: 'utf8',
      failOnErrors: false,
      verbose: false,
      format: '.json',
      swaggerDefinition: {},
      definition: {
        openapi: '3.0.0',
        info: {
          title: 'Nodejs-Starter-Template API',
          version: '1.0.0',
        },
      },
      apis: [
        "src/models/*.js",
        "src/utils/helpers/*.js",
        "src/api/controllers/template/*.js"
      ]
    }
  };