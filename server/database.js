
import mongoose from 'mongoose';

export function initDatabase() {
    mongoose.connect("mongodb+srv://joshuamarkmagwili:mgabonak@cluster0.dk9140b.mongodb.net/Water-Refilling-Management-System?retryWrites=true&w=majority")
    const db = mongoose.connection;
    db.on('error', (error) => console.error(error))
    db.once('open', () => console.log('CONNECTED TO THE DATABASE'))
}


