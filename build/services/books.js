"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBookById = exports.getBooks = void 0;
const books = [
    { "id": 1, "title": "First Book", "name": "My first book" },
    { "id": 2, "title": "Second Book", "name": "My second book" },
];
const getBooks = () => {
    return books;
};
exports.getBooks = getBooks;
const getBookById = (bookId) => {
    const foundBook = books.find(book => book.id === bookId);
    return foundBook || null;
};
exports.getBookById = getBookById;
