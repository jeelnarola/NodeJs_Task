const mongoose=require('mongoose')

const database=async()=>{
    await mongoose.connect("mongodb+srv://jeel:narola@cluster0.dgwjmgh.mongodb.net/Blog?retryWrites=true&w=majority&appName=AtlasApp")
    console.log("database connect..!");
}

module.exports=database