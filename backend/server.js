require('dotenv').config()

//newly added for authentication
const authRoutes = require('./Routes/authRoutes');
const express = require('express')

//require the mongoose database
const mongoose = require('mongoose')
const questionsRouter = require("./Routes/questionRoutes")
const userRoutes = require('./Routes/userRoutes');
const marksRoutes = require('./Routes/marksRoutes');


//express app
const  app = express()



//middleware
app.use(express.json()) 

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})


// API Routes
app.use('/api', userRoutes);  // User routes for managing users

app.use('/api/questions', questionsRouter)

// Middleware for authentication (newly added)
app.use('/api/auth', authRoutes);

app.use('/api/user', userRoutes);
app.use('/api/user', marksRoutes);

//added router post


//connect to mongoose
mongoose.connect(process.env.MONGO_URI)
    .then( () => { //After connecting to the database do the following
        //listen for request
        app.listen(process.env.PORT, () => {console.log('connected to the database and listening on port', process.env.PORT)})
    })
    .catch((error) => { //if the connection to the databse failed, this throws an error
        console.log(error)
    })
    



