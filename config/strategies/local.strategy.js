import passport from "passport";
import { Strategy } from 'passport-local';
import {verifyUser} from '../../src/models/User.js';

export function localStrategy() {
    passport.use(new Strategy({
        usernameField: 'username',
        passwordField: 'password'
    }, (username, password, done) => {
        const user = { username, password};
        verifyUser(user).then(foundUser => {
            if (foundUser) {
                done(null, foundUser[0]);
            } else {
                done(null, false);
            }
        }).catch((err) => {
            done(null, false);
        });
    }));
}