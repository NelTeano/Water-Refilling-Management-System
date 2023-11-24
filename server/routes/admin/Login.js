import express from "express"
import userModel from '../../models/users.js'
import passport from 'passport'
import LocalStrategy from 'passport-local'
import bcrypt from 'bcrypt'

const LoginRoute = express.Router()

passport.use(new LocalStrategy(async function verify(username, password, cb) {
    try {
      let user = await userModel.findOne({ username: username });
      
      if (!user) {
        return cb(null, false, { message: 'Incorrect username or password.' });
      }
  
      console.log(user);
      return cb(null, user);
    } catch (err) {
      return cb(err);
    }
  }));

passport.serializeUser(function(user, cb) {
    process.nextTick(function() {
      cb(null, { id: user.id, username: user.username });
    });
  });
  
  passport.deserializeUser(function(user, cb) {
    process.nextTick(function() {
      return cb(null, user);
    });
  });

LoginRoute.post('/auth', 
    passport.authenticate('local'),
    (req,res) => {
        res.send("it works")
});

//   LoginRoute.post('/auth', (req,res)=>{
//     res.send('test')
//   });

// LoginRoute.post('/',async (req,res)=>{
//     const {username,password} = req.body
//     res.send(`username: ${username} password: ${password}`)
//     console.log(username,password)
// })

export default LoginRoute
