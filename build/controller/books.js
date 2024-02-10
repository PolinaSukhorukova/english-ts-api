"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBookById = exports.getBooks = void 0;
const bookService = __importStar(require("../services/books"));
const getBooks = (req, res) => {
    const books = bookService.getBooks();
    res.send(books);
};
exports.getBooks = getBooks;
const getBookById = (req, res) => {
    const { bookId } = req.params;
    if (isNaN(+bookId)) {
        res.sendStatus(422);
        return;
    }
    const foundBook = bookService.getBookById(+bookId);
    if (!foundBook) {
        res.sendStatus(404);
        return;
    }
    res.send(foundBook);
};
exports.getBookById = getBookById;
