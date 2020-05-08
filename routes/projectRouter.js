const express = require('express');
const router = express.Router();
const project = require('../data/helpers/projectModel');

router.get('/', (req, res)=>{
    project.get()
    .then(project=>{
        res.status(200).json(project)
    })
    .catch((err)=>{
        res.status(500).json({error: "unable to get projects."})
    })
})