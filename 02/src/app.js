const express = require('express');
const notesModel = require('./models/notes.model');
const app = express();
app.use(express.json());



app.post("/notes", async (req, res) => {
   const Data = req.body;
   await notesModel.create({
      Title: Data.Title,
      description: Data.description
   });
   res.status(201).json({
      message: "Note is created successfully"
   })
});

app.patch("/notes/:id", async (req, res) => {
   const id = req.params.id;
   const newDescription = req.body.description;

   await notesModel.findOneAndUpdate({_id : id},{description : newDescription})
   res.status(200).json({
      Message: "New Description is added",
   })
})

app.get("/notes", async (req, res) => {
   const notes = await notesModel.find()
   res.status(200).json({
      messsage: "note is fetched",
      notes: notes
   })
});

app.delete("/notes/:id", async (req, res) => {
   const id = req.params.id;
   await notesModel.findOneAndDelete({
      _id: id
   })
   res.status(200).json({
      message: "Note has deleted",
   })
})

module.exports = app;