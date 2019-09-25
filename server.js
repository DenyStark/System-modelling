const { NODE_PORT } = process.env;
require('module-alias/register');

const app = require('./app');
const server = require('http').createServer(app);

server.listen(NODE_PORT, 'localhost', () => {
  console.info(`localhost:${NODE_PORT}`);
});
