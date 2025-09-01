import express from 'express';
const noteRouter = express.Router();


// controllers
import { getAllNotes, createNote, updateNote, deleteNote, getSpecificNote } from '../controllers/note.Controller.js';


noteRouter.get('/notes', getAllNotes)
noteRouter.post("/notes", createNote);
noteRouter.get('/notes/:id', getSpecificNote)
noteRouter.put("/notes/:id", updateNote);
noteRouter.delete("/notes/:id", deleteNote);

// get
// http://localhost:3003/

// get
// http://localhost:3003/api/notes

// post
// http://localhost:3003/api/notes

// put 
// http://localhost:3003/api/notes/:id

//  Delete
// http://localhost:3003/api/notes/:id

export default noteRouter;