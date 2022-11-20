const blogModel = require("../models/BlogModel")
const authorModel = require("../models/AuthorModel");


const createAuthor = async function (req, res) {
    let data = req.body
    let { title, fname, lname, email, password } = data

   

const authorCreated = await authorModel.create(data)
return res.status(201).send({status: true, msg:"sucessfully created", data:authorCreated});

}

module.exports = {createAuthor}