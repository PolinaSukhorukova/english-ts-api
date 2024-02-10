const books = [
    { "id": 1, "title": "First Book", "name": "My first book"},
    { "id": 2, "title": "Second Book", "name": "My second book"},
]

export const getBooks = () => {
    return books;
}

export const getBookById = (bookId: number) => {
    const foundBook = books.find(book => book.id === bookId);

    return foundBook || null;
}
