'use strict';
var db = require('../models/index.js');
var note = require('../models/note.js');
var noteModel = note(db.sequelize, db.Sequelize.DataTypes);

//Get all notes
var getAllNotes = function(req, res){
noteModel.findAll({
where: {isDeleted: false }
}).then(function  (notes){
  res.status(200).json({
    notes: notes,
    status:'success',
    message: ""
  });
});
};


// Create a new note 
var createNote = function (req, res) {
  console.log(req);
  noteModel.create({
    subject: req.body.subject,
    detail: req.body.detail
  }).then(note => {
    res.status(200).json({
      note: note,
      status: 'success',
      message: ""
    });
  }).catch(error=> {
    res.status(500).json({
      status: 'failure',
      note: note,
      message: ""
    });  
    });
};

/* Get Note */
var getNote = function (req, res) {
  noteModel.findByPk(req.params.id)
    .then((note) => {
      res.status(200).json({
        note: note,
        status: 'success',
        message: ""
      });
    });
};

/* Update Note */
var editNote = function (req, res) {
  noteModel.update({
      subject: req.body.subject,
      detail: req.body.detail
    },
    {
      where: { id: req.body.id }
    }).then(() => {
    res.status(200).json({
      status: 'success',
      message: ""
    });
  });
};

/* Delete Note */
var deleteNote = function (req, res) {
  noteModel.update({
      isDeleted: true
    },
    {
      where: { id: req.params.id }
    }).then(() => {
    res.status(200).json({
      status: 'success',
      message: ""
    });
  });
};

/* Exports all methods */
module.exports = {
  getAllNotes: getAllNotes,
  createNote: createNote,
  getNote: getNote,
  editNote: editNote,
  deleteNote: deleteNote
};