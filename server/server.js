// PACKAGE IMPORTS 
import express from "express"; 
import dotenv from "dotenv";
import cors from 'cors';

// DATABASE CONNECTION
import { initDatabase } from './database.js'

// CLIENT ROUTES 
import UserRoutes from './routes/users/UserRoutes.js'
import orderRoute from "./routes/OrderRoutes.js";


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



// ACTIVATE SERVER PORT 
app.listen(PORT, function () {
  console.log("Listening on http://localhost:" + PORT);
});

app.use('/api', UserRoutes); // FOR TESTING ROUTE WORKS
app.use('/api', orderRoute)

