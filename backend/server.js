require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose') //require the mongoose database
const path = require('path');
const cors = require('cors');
const authRoutes = require('./Routes/authRoutes');
const questionsRouter = require("./Routes/questionRoutes")
const userRoutes = require('./Routes/userRoutes');
const marksRoutes = require('./Routes/marksRoutes');
const moduleRoutes = require('./Routes/modulesRoutes');
const policyRoutes = require('./Routes/policyRoutes');


//express app
const  app = express()

//middleware
app.use(express.json()) 
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// API Routes
app.use('/api', userRoutes);  // User routes for managing users
app.use('/api/questions', questionsRouter)
app.use('/api/auth', authRoutes); // Middleware for authentication (newly added)
app.use('/api/user', userRoutes);
app.use('/api/user', marksRoutes);
app.use('/api/modules', moduleRoutes)
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // Serve static files (uploaded files)
app.use('/api/policy', policyRoutes);


//connect to mongoose
mongoose.connect(process.env.MONGO_URI)
    .then( () => { //After connecting to the database do the following
        //listen for request
        app.listen(process.env.PORT, () => {console.log('connected to the database and listening on port', process.env.PORT)})
    })
    .catch((error) => { //if the connection to the databse failed, this throws an error
        console.log(error)
    })
    



