// Import the express in typescript file
import express from 'express';
import { load } from 'ts-dotenv';
import { Games } from './service/games';
 
// Initialize the express engine
const app: express.Application = express();
 
// Take a port 3000 for running server.
const port: number = 3000;
 
// Handling '/' Request
app.get('/', async (_req, _res) => {
    const data = await Games.list({});
    _res.send(data);
});
 
// Server setup
app.listen(port, () => {
    console.log(`TypeScript with Express
         http://localhost:${port}/`);
});
