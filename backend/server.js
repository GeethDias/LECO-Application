require('dotenv').config()

const express = require('express')

//require the mongoose database
const mongoose = require('mongoose')
const questionsRouter = require("./Routes/questionRoutes")
//express app
const  app = express()



//middleware
app.use(express.json()) 


app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})
 
app.use('/api/questions', questionsRouter)

//connect to mongoose
mongoose.connect(process.env.MONGO_URI)
    .then( () => { //After connecting to the database do the following
        //listen for request
        app.listen(process.env.PORT, () => {console.log('connected to the database and listening on port', process.env.PORT)})
    })
    .catch((error) => { //if the connection to the databse failed, this throws an error
        console.log(error)
    })
    



