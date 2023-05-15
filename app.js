import express from 'express';
import chalk from 'chalk';
import debug from 'debug';
import morgan from 'morgan';
import path, { dirname } from 'path';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import initRoutes from './src/routers/router.js';
import passportConfig from './config/passport.js';

const debugApp = debug('app');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(dirname('.'), '/public')));
app.use(morgan('tiny'));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({ secret: 'halcon' }));

app.set('views', './src/views');
app.set('view engine', 'ejs');

passportConfig(app);

initRoutes(app);

app.listen(PORT, () => {
    debugApp(`Listening on port ${chalk.green(PORT)}`);
});
