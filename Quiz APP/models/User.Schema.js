const mongoose=require("mongoose")

const Quiz=new mongoose.Schema({
    questions: String,
    option1: String,
    option2: String,
    option3: String,
    option4: String,
    Answer: String,
})

const QuizAPP=mongoose.model("QuizQuestion",Quiz)

module.exports=QuizAPP