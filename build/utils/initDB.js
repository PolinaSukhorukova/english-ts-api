"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbInit = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const sequelize_typescript_1 = require("sequelize-typescript");
const Book_1 = require("../models/Book");
const IrregularVerb_1 = require("../models/IrregularVerb");
const Level_1 = require("../models/Level");
dotenv_1.default.config();
let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;
const url = `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?sslmode=require`;
const dbInit = () => {
    return new sequelize_typescript_1.Sequelize(url, {
        models: [Book_1.Book, IrregularVerb_1.IrregularVerb, Level_1.Level],
        dialectOptions: {
            ssl: {
                rejectUnauthorized: true,
            },
        },
    });
};
exports.dbInit = dbInit;
