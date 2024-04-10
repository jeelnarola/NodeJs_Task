const blog = require("../model/blog.schema")
const { body, validationResult } = require('express-validator');

const Home=(req,res)=>{
    res.render("index")
}

const BlogHome=(req,res)=>{
    res.render("blog")
}

const BlogAdd=async(req,res)=>{
    const result=validationResult(req)
    if(result.isEmpty()){
        let data=await blog.create(req.body)
        return res.send({msg:"Blog Create..!"})
    }
    res.send({error:result.array()})
}

const AllBlog=async(req,res)=>{
    let data=await blog.find()
    res.send(data)
    
}

const singlePage=async(req,res)=>{
    let {id}=req.params
    let {title}=req.body;
    let data= await blog.findById(id)
    res.render("singlePage",{data})
}

module.exports={Home,BlogHome,BlogAdd,AllBlog,singlePage}