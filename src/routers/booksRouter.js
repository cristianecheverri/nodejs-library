import express from "express";
import { getAllBooks, getBookById, storeNewBook, updateBook } from '../models/Book.js';

const booksRouter = express.Router();
booksRouter.use((req, res, next) => {
    if (req.user) {
        next();
    } else {
        res.redirect('/auth/signIn');
    }
})

booksRouter.route('/').get((req, res) => {
    getAllBooks().then((books) => {
        res.render('books/index', { books });
    });
});

booksRouter.route('/show/:id').get((req, res) => {
    const id = req.params.id;
    getBookById(id).then((book) => {
        // res.send(book);
        res.render('books/show', { book });
    })
});

booksRouter.route('/create').get((req, res) => {
    res.render('books/create', {});
});

booksRouter.route('/store').post((req, res) => {
    storeNewBook(req.body).then((book) => {
        res.redirect('/books');
    })
});

booksRouter.route('/update/:id').post((req, res) => {
    const id = req.params.id;
    updateBook(id, req.body).then((book) => {
        res.redirect('/books');
    })
});

booksRouter.route('/edit/:id').get((req, res) => {
    const id = req.params.id;
    getBookById(id).then((book) => {
        // res.send(book);
        console.log(book);
        res.render('books/edit', { book: book[0] });
    })
});

export default booksRouter;