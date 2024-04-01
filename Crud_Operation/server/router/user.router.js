const {Router}=require('express')
const { body, validationResult } = require('express-validator');
const {search, updateUser, userdelete, record, AddData } = require('../controller/user.controoler');
const router=Router()

    
    // USER FORM FILD DATA AND POST ROUTES
router.post('/createUser', [
    body('name','Name is required').notEmpty(),
    body('email','Invalid email').isEmail(),
    body('phone','Phone is required').notEmpty()
],AddData);

    // USER FORM FILD DATA AND POST API
router.get("/search",search)

    // USER UPDATE API
router.patch("/update/:id",updateUser)

    // USER DELETE API
router.delete("/delete/:id",userdelete)

    // USER SELECT NUMBER AND SHOW DATA API
router.post("/record",record)

module.exports=router