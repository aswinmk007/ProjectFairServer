const projects = require('../Models/projectModel')
//add project
exports.addProject =async (req,res)=>{
    console.log("inside Add project request");
    console.log(req.payload);
    console.log(req.body);
    console.log(req.file);
    const {title,language,overview,github,website} = req.body
    const userId = req.payload
    const projectImage = req.file.filename
    try{
        const exisitingProject = await projects.findOne({github})
        if(exisitingProject){
            res.status(406).json("project already available in our system.kindly upload another!!!")

 
        }else{
            const newProject = new projects({
                title,language,overview,github,website,projectImage,userId
            })
            await newProject.save()
            res.status(200).json(newProject)


        }

    }catch(err){
        res.status(401).json(err)


    }
}

//get all projects
exports.getAllprojects = async (req,res)=>{
    const searchKey = req.query.search
    const query = {
        language : {
            $regex: searchKey, $options: 'i'
        }
    }

    try{
        const allProjects = await projects.find(query)
        res.status(200).json(allProjects)
    }catch{
        res.status(401).json(err)
    }
}

//get userprojects

exports.getUserprojects = async (req,res)=>{
    const userId = req.payload
    try{
        const UserProjects = await projects.find({userId})
        res.status(200).json(UserProjects)
    }catch{
        res.status(401).json(err)
    }
}


//get home projects

exports.getHomeprojects = async (req,res)=>{
    try{
        const homeProjects = await projects.find().limit(3)
        res.status(200).json(homeProjects)
    }catch{
        res.status(401).json(err)
    }
}


exports.editProjects = async (req,res)=>{
    console.log("Inside edit project");
    const {pid} = req.params
    const userId = req.payload
    const {title,language,overview,github,website,projectImage} = req.body
    const uploadImage = req.file?req.file.filename:projectImage
    try{
        const updatedProject = await projects.findByIdAndUpdate({_id:pid},{
            title,language,overview,github,website,projectImage:uploadImage,userId
        },{new:true})
        await updatedProject.save()
        res.status(200).json(updatedProject)
    }catch(err){
        res.status(401).json(err)
    }
}

//remove 
exports.removeProject = async (req,res)=>{
    console.log("Inside remove project");
    const {pid} = req.params
    try{ 
        const projectDetails = await projects.findByIdAndDelete({_id:pid})
        res.status(200).json(projectDetails)
    }catch(err){
        res.status(401).json(err)
    }
}