import booksRouter from "./booksRouter.js";

function initRoutes (app) {
    app.use('/books', booksRouter);

    app.get('/', (req, res) => {
        res.render('index', { name: "My Class", data: ['a', 'b', 'c'] });
    });
}

export default initRoutes;