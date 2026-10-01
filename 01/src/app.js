const express = require('express')

const app = express();

app.use(express.json())

const notes =[];

app.post('/notes' , (req,res) => {
    notes.push(req.body)
    res.status(201).json({
        message : "Note is successfully created"
    })
});

app.get('/notes' , (req,res) => {
     res.status(200).json({
        notes : notes,
        Message : "Note is fetched successfully"
     }) 
});

app.delete('/notes/:index' , (req,res)=>{
    
    const index = req.params.index;
    delete notes[index];

    res.status(200).json({
        Message : "Note is successfully deleted",
    })
});

app.patch('/notes/:index' , (req,res) => {
     const index = req.params.index
     const description = req.body.description;

     notes[index].description = description

     res.status(200).json({
        message: "description has been updated"
     })
});

module.exports = app;