// Import the express in typescript file
import express from 'express';
import serverless from 'serverless-http';
import {createRoutes} from "./routes";

// Initialize the express engine
const app = express();
const router: express.Application = express();
 
// Take a port 3000 for running server.
// const port: number = 3000;
 
// Handling '/' Request
router.get('/', async (_req, _res) => {
  _res.send("Hello World!");
});

createRoutes(router);

 
// Server setup
app.use('/.netlify/functions/api', router);
module.exports.handler = serverless(app);
