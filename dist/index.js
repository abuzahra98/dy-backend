"use strict";
// src/index.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const typeorm_1 = require("typeorm");
const Header_1 = require("./entity/Header/Header");
const header_1 = __importDefault(require("../src/routes/Header/header"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
(0, typeorm_1.createConnection)({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '1234',
    database: 'postgres',
    synchronize: true,
    logging: true,
    entities: [Header_1.Header],
}).then(() => {
    console.log('Connected to the database');
}).catch(error => console.error('Error connecting to the database:', error));
app.use(header_1.default);
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
