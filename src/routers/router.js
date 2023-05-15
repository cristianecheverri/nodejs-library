import booksRouter from "./booksRouter.js";
import authRouter from "./authRouter.js";

function initRoutes (app) {
    app.use('/books', booksRouter);
    app.use('/auth', authRouter);

    app.get('/', (req, res) => {
        res.render('index', { name: "My Class", data: ['a', 'b', 'c'] });
    });
}

export default initRoutes;