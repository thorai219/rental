/* eslint-disable @typescript-eslint/no-var-requires */
import express from 'express';
const path = require('path');
import cors from 'cors';
import morgan from 'morgan';

const app = express();
app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(morgan('combined'));

app.use(express.static(path.join(__dirname, '..', 'public')));

// app.use('/v1', api);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

export default app;
