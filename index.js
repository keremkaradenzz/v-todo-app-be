import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import todoRoutes from "./routes/todos.js";


const app = express();

dotenv.config();

app.use(bodyParser.json({ extented: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
    res.json({
        author: 'admin',
        message: 'Hello'
    })
});

app.use('/todos', todoRoutes)


const CONNECTION_URL = "mongodb+srv://keremk:kerem123.@cluster0.w0gfl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    app.listen(5005, () => {
        console.log(`server is running on port ${5005}`)
    });
}).catch(err => console.log(err.message))