import express from "express";
import { getAllBooks, getBookById, storeNewBook } from '../models/Book.js';

const booksRouter = express.Router();

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

export default booksRouter;