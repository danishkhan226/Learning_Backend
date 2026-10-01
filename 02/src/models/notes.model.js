const mongoose = require('mongoose');

const notesSchema = new mongoose.Schema({
     Title : String,
     description : String
});

const notesModel = mongoose.model("Notes",notesSchema);

module.exports = notesModel;