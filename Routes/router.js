const express = require('express')
const userController = require('../Controllers/userController')
const projectController = require('../Controllers/projectController')
const jwtMiddleware = require('../Middlewares/jwtMiddleware')
const multerConfig = require('../Middlewares/multerMiddleware')

const router = new express.Router()

//register
router.post('/register',userController.register)
//login
router.post('/login',userController.login)

//add project
router.post("/add-project",jwtMiddleware,multerConfig.single('projectImage'),projectController.addProject)

//get allprojects
router.get('/all-projects',jwtMiddleware,projectController.getAllprojects)

//get userProjects 
router.get('/user-projects',jwtMiddleware,projectController.getUserprojects)

//get Homeprojects
router.get('/home-projects',projectController.getHomeprojects)

//edit project
router.put('/edit-project/:pid',jwtMiddleware,multerConfig.single('projectImage'),projectController.editProjects)

//remove project
router.delete('/remove-project/:pid',jwtMiddleware,projectController.removeProject)
//edit user
router.put('/edit-user',jwtMiddleware,multerConfig.single("profileImage"),userController.editUser)


//export router
module.exports = router