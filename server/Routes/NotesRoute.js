import express from "express"
import { AllNotes, DeleteNotes, NewNotes, SingleNote, UpdatedNotes } from "../controller/NotesController.js";


const router = express.Router();


router.route("/").get(AllNotes).post(NewNotes)


router.route("/:id").get(SingleNote).put(UpdatedNotes).delete(DeleteNotes);


export default router;