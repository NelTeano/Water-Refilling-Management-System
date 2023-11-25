// PACKAGE IMPORTS 
import express from "express"; 
import dotenv from "dotenv";
import cors from 'cors';
import passport from 'passport'
import LocalStrategy from 'passport-local'
import bcrypt from 'bcrypt'
import path from 'path'
import session from 'express-session'
import cookieParser from 'cookie-parser'
// import MongoDBSession from 'connect-mongodb-session';
// const MongoDBStore = MongoDBSession(session);

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
    origin: ['http://localhost:5173','http://localhost:5173'],  // THE HTTP(ORIGIN) THAT WILL ALLOW TO ACCESS THE ROUTES
    credentials: true,
  }));
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
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


app.post('/login', passport.authenticate('local'),(req, res, next) => {
  return res.status(200).json({ message: 'Login successful', user: req.user });
})

app.get('/checker',(req,res)=> {
  res.send(req.isAuthenticated())
})

const isAuth = (req,res,next) => {
  if(req.user) next()
  res.send(req.user)
}

app.get('/',isAuth,(req,res)=>{
  res.send('ok')
})

