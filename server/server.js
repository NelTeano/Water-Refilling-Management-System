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

//AUTH CHECKER MIDDLEWARE
import { EnsureAuthentication } from "./routes/admin/EnsureAuthenticated.js";

// CLIENT ROUTES 
import UserRoutes from './routes/client/UserRoutes.js'

//ADMIN ROUTES
import LoginRoute from "./routes/admin/Login.js";
//import passportInit from './routes/admin/PassportConfig.js';

const app = express();
dotenv.config();      // ACCESS .ENV 
initDatabase();

const PORT = 5174;
console.log("app is running");

//const __dirname = path.dirname(fileURLToPath(import.meta.url));


// const store = new MongoDBStore({
//   uri: process.env.VITE_DATABASE_URI,
//   expires: 1000 * 60 * 60 * 2, // 2 hours expiration time for sessions (in milliseconds)
// });

// store.on('error', function (error) {
//   console.error('MongoDBStore error:', error);
// });

//MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(cors({
    origin: ['http://localhost:5173','http://localhost:5173'],  // THE HTTP(ORIGIN) THAT WILL ALLOW TO ACCESS THE ROUTES
    credentials: true,
  }));

//app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
}));

app.use(cookieParser('keyboard cat'))
app.use(passport.initialize())
app.use(passport.session())

import PassportConfig from './routes/admin/PassportConfig.js';
PassportConfig(passport);



//PASSPORT INIT
//app.use(passport.authenticate('session'));
// app.use(passport.initialize());
// app.use(passport.session());


// ACTIVATE SERVER PORT 
app.listen(PORT, function () {
  console.log("Listening on http://localhost:" + PORT);
});

app.use('/api', UserRoutes); // FOR TESTING ROUTE WORKS
//app.use('/login',LoginRoute)

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
          return res.status(200).json({ message: 'Login successful', user: req.user });
      });
  })(req, res, next);
});


