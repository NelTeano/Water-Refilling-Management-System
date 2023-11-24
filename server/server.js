// PACKAGE IMPORTS 
import express from "express"; 
import dotenv from "dotenv";
import cors from 'cors';
import passport from 'passport'
import LocalStrategy from 'passport-local'
import bcrypt from 'bcrypt'

// DATABASE CONNECTION
import { initDatabase } from './database.js'

// CLIENT ROUTES 
import UserRoutes from './routes/client/UserRoutes.js'

//ADMIN ROUTES
import LoginRoute from "./routes/admin/Login.js";

const app = express();
dotenv.config();      // ACCESS .ENV 
initDatabase();

const PORT = 5174;
console.log("app is running");


app.use(cors({
    origin: ['http://localhost:5173','http://localhost:5173']  // THE HTTP(ORIGIN) THAT WILL ALLOW TO ACCESS THE ROUTES
}));



app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// ACTIVATE SERVER PORT 
app.listen(PORT, function () {
    console.log("Listening on http://localhost:" + PORT);
});

app.use('/api', UserRoutes); // FOR TESTING ROUTE WORKS
app.use('/login',LoginRoute)