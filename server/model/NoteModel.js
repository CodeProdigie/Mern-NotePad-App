import mongoose from "mongoose";

const NotesSchema = mongoose.Schema({
    title: {type:String, required: true},
    content: {type:String, required: true},
    date: {type:Date, required: true},
})

const NotesModel = mongoose.model("Note",NotesSchema);

export default NotesModel;