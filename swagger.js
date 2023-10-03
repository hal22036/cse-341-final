const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Meal Ideas Api',
        description: 'Meal Ideas Api'
    },
    host: 'localhost:3000',
    schemes: ['http','https']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

//this will generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);