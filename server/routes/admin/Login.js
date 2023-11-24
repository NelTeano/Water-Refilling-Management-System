import express from "express"
import passport from "passport";
const LoginRoute = express.Router()

let isAuthenticated=false //temporary only. Will integrate JWT later on for better security

LoginRoute.post('/', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            return res.status(500).json({ message: 'An error occurred' });
        }
        if (!user) {
            return res.status(401).json({ message: 'Incorrect username or password' });
        }
        req.logIn(user, (err) => {
            if (err) {
                return res.status(500).json({ message: 'Login failed' });
            }
            req.session.user = { id: user._id, username: user.username };
            isAuthenticated = true
            return res.status(200).json({ message: 'Login successful', user: user });
        });
    })(req, res, next);
});

LoginRoute.get('/checker',(req,res)=> {
    res.send({isAuthenticated: isAuthenticated})
    console.log(isAuthenticated)
})

export default LoginRoute
