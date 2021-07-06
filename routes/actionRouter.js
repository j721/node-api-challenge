const express = require('express');

const router = express.Router();
const actions = require('../data/helpers/actionModel');
const projects = require('../data/helpers/projectModel');


router.get('/', (req, res)=>{
    actions.get()
    .then((action)=>{
        res.status(200).json(action)
    })
    .catch((error)=>{
        res.status(500).json({error: "unable to get actions"})
    })
})


router.get('/:id', (req, res)=>{
    actions.get(req.params.id)
    .then((action)=>{
        res.status(200).json(action)
    })
    .catch((error)=>{
        res.status(500).json({error: "unable to get actions by id."})
    })
})

router.post('/', (req,res)=>{
    const body = req.body;
    const {project_id} = req.body;

    projects.get(project_id)
    .then((project)=>{
        if(project){
            if(body.description && body.notes && body.project_id){
                actions.insert(body)
                .then((action)=>{
                    res.status(201).json(action)
                })
                .catch((error)=>{
                    res.status(500).json({error: "could not add action"})
                })
            }else{
                res.status(400).json({message: "description, notes, and project_id required."})
            }
        }else{
            res.status(400).json({message: "project_id does not exist."})
        }
    })
})

router.put('/:id', (req,res)=>{
    actions.update(req.params.id, req.body)
    .then((project)=>{
        res.status(200).json(project)
    })
    .catch((error)=>{
        res.status(500).json({error: "unable to update actions"})
    })
})


router.delete('/:id', (req,res)=>{
    actions.remove(req.params.id)
    .then((project)=>{
        res.status(200).json( `project with id of ${req.params.id} has been removed`)
    })
    .catch((error)=>{
        res.status(500).json({error: "unable to remove actions."})
    })
})

module.exports = router; 