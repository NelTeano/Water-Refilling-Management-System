// PACKAGE IMPORTS 
import express from "express"; 
import dotenv from "dotenv";
import cors from 'cors';
import passport from 'passport'
import LocalStrategy from 'passport-local'
import bcrypt from 'bcrypt'
import path from 'path'
import session from 'express-session'
import cookieParser, { JSONCookie } from 'cookie-parser'

//import { fileURLToPath } from 'url';

// DATABASE CONNECTION
import { initDatabase } from './database.js'

// CLIENT ROUTES 
import UserRoutes from './routes/client/UserRoutes.js'

//ADMIN ROUTES
import PassportConfig from './routes/admin/PassportConfig.js';

const app = express();
dotenv.config();      // ACCESS .ENV 
initDatabase();

const PORT = 5174;
console.log("app is running");

//MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(cors({
    origin: [
      'http://localhost:5173',
      'http://localhost:5173/admin',
      'http://localhost:5173/admin/dashboard'
    ],  // THE HTTP(ORIGIN) THAT WILL ALLOW TO ACCESS THE ROUTES
    credentials: true,
  }));
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: {secure: false}
}));
app.use(cookieParser('keyboard cat'))
app.use(passport.initialize())
app.use(passport.session())
PassportConfig(passport);


// ACTIVATE SERVER PORT 
app.listen(PORT, function () {
  console.log("Listening on http://localhost:" + PORT);
});

app.use('/api', UserRoutes); // FOR TESTING ROUTE WORKS


app.post('/login', (req, res, next) => {
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
        req.session.user = user;
        return res.status(200).json({ message: 'Login successful', user: req.user});
    });
  })(req, res, next);
});
app.get('/checker',(req,res)=> {
  //res.send(req.user)
  // res.cookie('myCookie', 'cookieValue', { 
  //   maxAge: 900000, // Expires after 15 minutes
  //   httpOnly: true, // Cookie cannot be accessed by client-side scripts
  // });
  // res.send('Cookie is set');
  res.send(req.user)
})

const isAuth = (req,res,next) => {
  if(req.user) next()
  res.send(req.user)
}

app.get('/',isAuth,(req,res)=>{
  res.send('ok')
})

app.get('/getcookie',(req,res)=>{
  const cookieValue = req.cookies['myCookie'];
  console.log('Cookie Value: ' + cookieValue);
  res.send('ok')
})

