

// get all note
export const getAllNotes = async (req, res) => {
     try {
          res.send('get all notes')
     } catch (err) {
          console.error('error occured fecting the note')
     }
}

// create note
export const createNote = async (req, res) => {
     try {
          const { title, description } = req.body;
          
          if (!title || description) {
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
