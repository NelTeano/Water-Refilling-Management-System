// PACKAGE IMPORTS 
import express from "express"; 
import dotenv from "dotenv";
import cors from 'cors';
import passport from 'passport'
import LocalStrategy from 'passport-local'
import bcrypt from 'bcrypt'
import path from 'path'
import session from 'express-session'
import MongoDBSession from 'connect-mongodb-session';
const MongoDBStore = MongoDBSession(session);

import { fileURLToPath } from 'url';

// DATABASE CONNECTION
import { initDatabase } from './database.js'

import { EnsureAuthentication } from "./routes/admin/EnsureAuthenticated.js";

// CLIENT ROUTES 
import UserRoutes from './routes/client/UserRoutes.js'

//ADMIN ROUTES
import LoginRoute from "./routes/admin/Login.js";
import passportInit from './routes/admin/PassportConfig.js';

const app = express();
dotenv.config();      // ACCESS .ENV 
initDatabase();

const PORT = 5174;
console.log("app is running");

const __dirname = path.dirname(fileURLToPath(import.meta.url));


const store = new MongoDBStore({
  uri: process.env.VITE_DATABASE_URI,
  expires: 1000 * 60 * 60 * 2, // 2 hours expiration time for sessions (in milliseconds)
});

store.on('error', function (error) {
  console.error('MongoDBStore error:', error);
});

app.use(cors({
    origin: ['http://localhost:5173','http://localhost:5173']  // THE HTTP(ORIGIN) THAT WILL ALLOW TO ACCESS THE ROUTES
}));

app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  store: store
}));
app.use(passport.authenticate('session'));

//PASSPORT INIT
// app.use(passport.authenticate('session'));
// app.use(passport.initialize());
// app.use(passport.session());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// ACTIVATE SERVER PORT 
app.listen(PORT, function () {
    console.log("Listening on http://localhost:" + PORT);
});

app.use('/api',EnsureAuthentication, UserRoutes); // FOR TESTING ROUTE WORKS
app.use('/login',LoginRoute)

