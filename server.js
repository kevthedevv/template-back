const express = require('express')
require('dotenv').config()
const member = require('./routes/member')
const mongoose = require('mongoose')
const cors = require("cors");

const app = express ()

app.use(cors({ origin: true })); // enable origin cors
app.use((req, res, next) => {
     console.log('I am detecting a request - MIDDLEWARE')
     next();
})

app.use(express.json())
app.use('/api/member', member)

mongoose.connect(process.env.MONGO_URI)
        .then(() => {
                //listen request: 4000, callback function(the console log) to fire if successfully listen to 4k
                app.listen(process.env.PORT || 5000, () => {
                        console.log(`Connected to DB and Listening to port ${process.env.PORT}`)
                })

        })
        .catch((error) => {
                console.log(error)
        })
