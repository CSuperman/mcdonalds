// API to access old Mcdonalds toys

const app = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const PORT = process.env.port || 3000;


server.use(middlewares);
server.use(router);


