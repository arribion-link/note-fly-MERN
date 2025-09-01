import noteModel from "../models/note.Schema.js"

// get all note
export const getAllNotes = async (req, res) => {
     try {
          const notes = await noteModel.find()
          res.status(200).json(notes);
     } catch (err) {
          console.error('error occured fecting the note')
          res.status(500).json({
               sucess: false,
               message: "Error fetching Notes"
          })
     }
}

// create note
export const createNote = async (req, res) => {
     try {
          const { title, content } = req.body;
          
          if (!title || content) {
               res.send("Provide both title and description to create a note")
          }

          

          res.send('create a note')
     } catch (err) {}
}


// update note
export const updateNote = async (req, res) => {
     try {
          res.send("update note");
     } catch (err) {}
};

// delete note
export const deleteNote = async (req, res) => {
     try {
          res.send("delete note");
     } catch (err) {}
};

export default {
    getAllNotes,
    createNote,
    updateNote,
    deleteNote
};
