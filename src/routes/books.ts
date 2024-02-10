import express from 'express';
import * as bookController from '../controller/books';

export const router = express.Router();

router.get('/', bookController.getBooks);
router.get('/:bookId', bookController.getBookById);
