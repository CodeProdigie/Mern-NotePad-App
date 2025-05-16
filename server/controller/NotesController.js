import NotesModel from "../model/NoteModel.js";

// Get All Notes

export const AllNotes = async (req,res) => {
    const GetNotes = await NotesModel.find();
    res.json(GetNotes);
    // res.json({message : "All Notes"})
}

// Create New Notes 

export const NewNotes = async (req,res) => {
    const {title,content,date} = req.body;
    const CreateNotes = new NotesModel({title,content, date:new Date(date)});
    await CreateNotes.save();
    res.status(201).json(CreateNotes)
}

// Grab Individual Note by Id

export const SingleNote = async (req,res) => {
    const Note = await NotesModel.findById(req.params.id);
    res.json(Note);
}


// Update Notes

export const UpdatedNotes = async (req,res) => {
   const {title, content, date} = req.body;
   const ModifiedNotes = await NotesModel.findByIdAndUpdate(req.params.id, {
    title,content,date:new Date(date)
   }, {new: true})

   res.json(ModifiedNotes);
}

// Delete Notes

export const DeleteNotes = async (req,res) => {
    await NotesModel.findByIdAndDelete(req.params.id);
    res.json({message: "Note deleted"});
}