// PACKAGE IMPORTS 
import express from "express"; 
import dotenv from "dotenv";
import cors from 'cors';
import path from 'path';

// DATABASE CONNECTION
import { initDatabase } from './database.js'

// CLIENT ROUTES 
import UserRoutes from './routes/users/UserRoutes.js'
import orderRoute from "./routes/OrderRoutes.js";


const app = express();
dotenv.config();      // ACCESS .ENV 
initDatabase();
const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);

const PORT = process.env.VITE_PORT || 5174;
console.log("app is running");

//MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));
app.use(cors({
    origin: [
      'https://hydromaze.azurewebsites.net/',
      'https://hydromaze.azurewebsites.net/admin',
      'https://hydromaze.azurewebsites.net/admin/dashboard'
    ],  // THE HTTP(ORIGIN) THAT WILL ALLOW TO ACCESS THE ROUTES
    credentials: true,
  }));



// ACTIVATE SERVER PORT 
app.listen(PORT, function () {
  console.log("Listening on http://localhost:" + PORT);
});

app.use('/api', UserRoutes); // FOR TESTING ROUTE WORKS
app.use('/api', orderRoute)

