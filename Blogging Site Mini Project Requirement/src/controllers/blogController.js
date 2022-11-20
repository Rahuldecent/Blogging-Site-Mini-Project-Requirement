const blogModel = require("../models/BlogModel")
const authorModel = require("../models/AuthorModel");


const createBlog = async function (req,res){
    let data = req.body
    let {title,body,authorId,tags,category,subcategory ,isPublished,isDeleted} = data


    const blogCreated = await blogModel.create(data)
    return res.status(201).send({status:true, data:blogCreated, msg:"blog sucessfully created"})
}



module.exports = {createBlog}