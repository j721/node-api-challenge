const express = require('express');
const router = express.Router();
const projects = require('../data/helpers/projectModel');

router.get('/', (req, res)=>{
    projects.get()
    .then(project=>{
        res.status(200).json(project)
    })
    .catch((err)=>{
        res.status(500).json({error: "unable to get projects."})
    })
})

router.post('/', (req,res)=>{
    const body = req.body;
    if(body.description && body.name){
        projects.insert(body)
        .then((project)=>{
            res.status(200).json(project)
        })
        .catch((error)=>{
            res.status(500).json({error: "Sorry, could not add project."})
        })
    }else{
        return res.status(400).json({message: "description and name required."})
    }
})


//custom middleware

// function validateProjectId(){
//     return (req,res,next)=>{
//        if(req.params.id){
//         projects.get(req.params.id)
//         .then((project)=>{
//             if(project){
//                 req.project = project;
//                 next();
//             }else{
//                 res.status(400).json({message: "sorry, project not found."})
//             }
//         })
//         .catch((err)=>{
//             next(err);
//         })
//        }
//     }
// }
