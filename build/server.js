"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const books_1 = require("./routes/books");
const levels_1 = require("./routes/levels");
const irregularVerbsByLevel_1 = require("./routes/irregularVerbsByLevel");
const initDB_1 = require("./utils/initDB");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
(0, initDB_1.dbInit)();
app.use('/books', books_1.router);
app.use('/levels', levels_1.router);
// app.use('/irregular-verbs', irregularVerbRouter);
app.use('/irregularVerbsByLevel', irregularVerbsByLevel_1.router);
app.listen(5000);
