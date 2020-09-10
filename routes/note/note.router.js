"user stritc";
var noteController = require('../../controller/note.controller.js')
var express = require('express');
var router = express.Router();

//Get all Notes
router.get('/api/note', noteController.getAllNotes); 

//Create new Note
router.post('/api/note', noteController.createNote);

//Get Note Detail
router.get('/api/note/:id', noteController.getNote);

//Edit Note
router.put('/api/note/:id', noteController.editNote);

//Delete note
router.delete('/api/note/:id', noteController.deleteNote);

module.exports = router;
