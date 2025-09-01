import noteModel from "../models/note.Schema.js"

// get all note
export const getAllNotes = async (req, res) => {
     try {
          // sort to get the latest data first
          // default  = 1 (one)
          const createAt = {
               createAt: -1
          }
          const notes = await noteModel.find().sort(createAt)
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
          if (!title || !content) {
               res.send("Provide both title and description to create a note")
          }
          const noteData = {
               title,
               content
          }
          const newNote = new noteModel(noteData)
          await newNote.save()
          res.status(201).json({
               sucess: true,
               message: "Note created successfully"
          })
     } catch (err) {
          res.status(500).json({
               sucess: false,
               message: "error creating note"
          });
     }
}

// get specific note
export const getSpecificNote = async (req, res) => {
     try {
          const idDataToGet = req.params.id;
          const specificData = await noteModel.findById(idDataToGet);
          if (!specificData) {
               return res.status(404).json({
                    message:"note note found"
               })
          }
          res.status(200).json(specificData)
     } catch (err) {
          res.status(404).json({
               sucess: false,
               message: "Error getting specific note"
          });
     }
}


// update note
export const updateNote = async (req, res) => {
     try {
          const { title, content } = req.body;
          const IdOfDataToUpdate = req.params.id;
          const upDateData = {
               title,
               content
          }
          const isNoteNew = {
               new:true
          }
          await noteModel.findByIdAndUpdate(IdOfDataToUpdate, upDateData, isNoteNew);
          res.status(201).json({
               sucess: true,
               message: "Note updated sucessfully"
          });
     } catch (err) {
          res.status(404).json({
               sucess: false,
               message: "Note note found"
          })
     }
};

// delete note
export const deleteNote = async (req, res) => {
     try {
          // const { title, content } = req.body;
          const dataToDelete = req.params.id;
          await noteModel.findByIdAndDelete(dataToDelete)
          res.status(200).json({
               sucess: true,
               message: "note deleted sucess fully"
          });
     } catch (err) {
          res.status(400).json({
               sucess: false,
               message: "error deleting your note"
          })
     }
};

export default {
     getAllNotes,
     getSpecificNote,
    createNote,
    updateNote,
    deleteNote
};
