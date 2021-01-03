const express = require ('express');
const colors = require('colors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const { json } = require('express');
const dotenv = require('dotenv')
const path = require('path');

const app = express();

const connectDB = require('./config/db');

dotenv.config({path: './config/config.env'});

connectDB();



app.use(cookieParser());
app.use(express.json());

const userRouter = require('./routes/UserRoutes');
const todoRouter = require('./routes/TodoRoutes');
app.use('/api/users', userRouter);
app.use('/api/users', todoRouter);



app.get('/api/users/', (req,res) => {
    res.status(200).json({
        success: true,
        message: "Server started"
    })
})

PORT = process.env.PORT || 5000

if(process.env.NODE_ENV === "production") {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.bgGreen.yellow.bold));