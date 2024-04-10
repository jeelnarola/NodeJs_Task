const user = require("../model/user.schema");
const { body, validationResult } = require('express-validator');


    // NOW DATA AND TIME
const now =new Date()
const year=now.getFullYear();
const month=String(now.getMonth()+1).padStart(2,'0');
const day=String(now.getDate()).padStart(2,'0')
const hours=now.getHours()
const minutes=now.getMinutes()
const second=now.getSeconds()


    // USER DATA CATCH ANE SAVE DATABASE
const AddData=async(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    console.log(req.body.name);
    try {
        let obj={
            image:req.body.image,
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
            phone:req.body.phone,
            status:true,
            created_date:`${year}/${month}/${day}  ${hours}:${minutes}:${second}`,
        }
        const newUser = await user.create(obj);
        res.send(newUser);
    } catch (err) {
        res.status(400).json({ message: "no"});
    }
}

    // USER SERACH IN DATA CATCH AND GET API TO THROW DATA FRONT-END
const search=async(req,res)=>{
    let {sear}=req.query
    try {
        const users = await user.find({$or:[{ name:sear},{ email:sear},{ phone:sear}]});
        res.json(users);
    } catch (error) {
        console.error('Error searching users:', error);
        res.status(500).send('Server Error');
    }
}

    // USER UPDATE IN DATA CATCH AND PATCH API TO THROW DATA CHANGE
updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const {name,email,phone}=req.body
        
        let obj={
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
            phone:req.body.phone,
            update_date:`${year}/${month}/${day}  ${hours}:${minutes}:${second}`,
        }
        const updatedUser = await user.findByIdAndUpdate(id, obj);
        await updatedUser.save()
        res.json(updatedUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};


    // USER DELETE IN DATA CATCH AND DELETE API TO THROW IN DATABASE IN SATUTS CHANGE IS A FALSE
const userdelete=async(req,res)=>{
    try {
        const { id } = req.params;
        let obj={
            status:false
        }
        let data=await user.findById(id);
        let stro=await user.findByIdAndUpdate(id,obj)
        await stro.save()
        res.json(stro);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }

}

    // USER SELECT RECORDS CATCH AND POST API TO THROW DATA SHOW
const record=async(req,res)=>{
    let {records}=req.body
    console.log(records);
    let data=await user.find()
    if(records=="ALL"){
        let data=await user.find()
        res.status(200).json(data)
    }else{
        const recordShow=data.slice(0,records)
        res.status(200).json(recordShow)

    }
}

const AllData=async(req,res)=>{
    let data=await user.find()
    res.json(data)
}

module.exports={AddData,search,updateUser,userdelete,record,AllData}