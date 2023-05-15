import express from "express";
import { userSignUp } from '../models/User.js';
import passport from "passport";

const authRouter = express.Router();

authRouter.route('/signUp').get((req, res) => {
    res.render('auth/signUp');
});

authRouter.route('/signUp').post((req, res) => {
    const { username, password, user_first_name, user_last_name, user_age } = req.body;

    userSignUp({ username, password, user_first_name, user_last_name, user_age, user_birth_date: '2023-01-01' }).then((user) => {
        req.login(user[0], () => {
            res.redirect('/auth/profile');
        });
    });
});

authRouter.route('/signIn').get((req, res) => {
    res.render('auth/signIn');
});

authRouter.route('/signIn').post((req, res) => {
    passport.authenticate('local', {
        successRedirect: '/auth/profile',
        failureRedirect: '/auth/signIn'
    })(req, res);
});

authRouter.route('/profile').get((req, res) => {
    // res.json(req.body);
    res.json(req.user);
});

export default authRouter;