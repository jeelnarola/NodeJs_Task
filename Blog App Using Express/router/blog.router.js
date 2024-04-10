const {Router}=require('express')
const { body, validationResult } = require('express-validator');

const { BlogHome, BlogAdd, AllBlog, singlePage, Home } = require('../controller/blog.controller');
const blog = require('../model/blog.schema');

const router=Router()

router.get("/",Home)
router.get("/blogAdd",BlogHome)
router.post("/BlogAdd",[
    body('title','title is require.').notEmpty().isLength({min:3}),
    body('blogger_name','blogger_name IS Require and minimum 3 letter use...').notEmpty().isLength({min:3}),
    body("image","Image Not Empty").notEmpty(),
    body('description',"(3 or more character required").notEmpty().isLength({min:3})
],BlogAdd)

router.get('/AllBlog',AllBlog)
router.get("/singlePage/:id",singlePage)

router.get("/serach",async(req,res)=>{
    let {category}=req.query
    let data=await blog.find({category:category}) || [];
    res.json(data)
})

module.exports=router
