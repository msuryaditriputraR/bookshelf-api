const books = require('./../books');

const getAllBooksHandler = (request, h) => {
    const newBooks = [];

    books.forEach(book => {
        newBooks.push({
            id: book.id,
            name: book.name,
            publisher: book.publisher
        });
    });

    const { name, reading, finished } = request.query;

    const response = h.response({
        status: 'success',
        data: {
            books: newBooks
        }
    });
    response.code(200);
    return response;
};

module.exports = getAllBooksHandler;
