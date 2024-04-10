const mongoose=require('mongoose')
const blogschema=new mongoose.Schema({
    title:String,
    image:String,
    category:String,
    bloger_name:String,
    description:String,
})

const blog=mongoose.model("blog",blogschema)

module.exports=blog