const mongoose=require('mongoose')

const database=async()=>{
    await mongoose.connect("mongodb+srv://jeel:narola@cluster0.dgwjmgh.mongodb.net/API?retryWrites=true&w=majority&appName=AtlasApp")
    console.log("MongoDB Connect..!")
}

module.exports=database