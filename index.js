//modules
import express from "express";
import bodyParser from "body-parser";
import { process } from "./helper.js"
import mongoose from "mongoose";
const app = express();

//bodyParser middleware
app.use(bodyParser.json());

//Database Connection
mongoose.connect('mongodb://localhost:27017/weather', { useUnifiedTopology: true });
const db = mongoose.connection
db.on('error', () => console.log('error'));

db.on('connected', () => console.log('connection establish successfully'));

//Endpoint API for fetching weather info
app.get("/getWeatherData", (req, res, next) => {
    try {
        const d = new Date();
        const date = d.getDate();
        const params = { 'date': date };
        process(params).then(response => {
            if (response.length) {
                res.send({ 'message': 'Successful', data: response }).status(200);
            } else {
                res.send({ message: `Date is not Prime so no data: ${date}` }).status(400);
            }
        });
    } catch (error) {
        res.send({ 'error': error }).status(500)
    }
});

//Server
app.listen(8080, () => {
    console.log(`Server is running`);
});

export {
    db
}