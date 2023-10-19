// PACKAGE IMPORTS 
import express from "express"; 
import dotenv from "dotenv";
import cors from 'cors';

// DATABASE CONNECTION
import { initDatabase } from './database.js'

// ROUTES 
import UserRoutes from './routes/client/UserRoutes.js'


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