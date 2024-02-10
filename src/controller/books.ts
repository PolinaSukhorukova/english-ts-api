import * as bookService from '../services/books';

export const getBooks = (req: any, res: { send: (arg0: { id: number; title: string; name: string; }[]) => void; }) => {
    const books = bookService.getBooks();

    res.send(books);
};

export const getBookById = (req: { params: { bookId: any; }; }, res: { sendStatus: (arg0: number) => void; send: (arg0: { id: number; title: string; name: string; }) => void; }) => {
    const { bookId } = req.params;

    if(isNaN(+bookId)) {
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