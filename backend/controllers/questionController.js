const Question = require('../Models/QuestionsModel')
const mongoose = require('mongoose')


// get all questions
const getQuestions = async (req, res) => {
    const { moduleId } = req.query;
    console.log("moduleId: ", moduleId);

    if (!moduleId) {
        return res.status(400).json({ error: "Module ID is required" });
    }

    try {
        // Fetch questions and populate the related module details
        const questions = await Question.find({ moduleId }).populate('moduleId');
        

        if (questions.length === 0) {
            return res.status(404).json({ error: "No questions found for this module" });
        }

        res.status(200).json(questions);
    } catch (error) {
        console.error("Error fetching questions: ", error.message);
        res.status(500).json({ error: "Server error" });
    }
};



// get a single question
const getQuestion = async (req, res) => {
    

    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({error:'No such workout'})
    }
    const workout = await Workout.findById(id) //this method is in mongoose
    //find by is where one document is retrieved 
    //to use await, you need to have async defined in the function 
    //await use to remove from bruowswer getting stucked while the document is been received to the browser.

    if (!workout) {
        return res.status(404).json({ error: 'No such workout' })
    }
    res.status(200).json(workout)
}

// create a new question
const createquestion = async (req, res) => {
    const { moduleId, questionText, options, correctAnswer} = req.body
    
    // add document to database
    try {
        const question = await Question.create({  moduleId, questionText, options, correctAnswer }) // moduleId, questionText, options, correctAnswer create a new document in MongoDB
        res.status(200).json(question)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }   
}

// Delete questions
const deleteQuestions = async (req, res) => {

    const id = req.params.id

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such question"})
    }
    try {
        
        const questions = await Question.findOneAndDelete({ _id: id });
        res.status(200).json(questions)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


module.exports = {
    createquestion,
    getQuestions,
    deleteQuestions
}