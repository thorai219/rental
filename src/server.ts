/* eslint-disable @typescript-eslint/no-var-requires */
const http = require('http');
import app from './app';
import dotenv from 'dotenv';
import { mongoConnect } from './services/mongo';

dotenv.config();
const PORT = process.env.PORT || 8080;

const server = http.createServer(app);

const startServer = async () => {
  await mongoConnect();

  server.listen(PORT, () => console.log(`server started at port ${PORT}`));
};

startServer();
