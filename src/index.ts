
// src/index.ts

import express from 'express';
import { createConnection } from 'typeorm';
import { Header } from './entity/Header/Header';
import  headerRoutes  from '../src/routes/Header/header';

const app = express();
const port = 3000;

app.use(express.json());

createConnection({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '1234',
    database: 'postgres',
    synchronize: true,
    logging: true,
    entities: [Header],
}).then(() => {
  console.log('Connected to the database');
}).catch(error => console.error('Error connecting to the database:', error));


app.use(headerRoutes);



app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
