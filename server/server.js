import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import connectDB from "./config/database.js";
import NotesRoute from "./Routes/NotesRoute.js"

dotenv.config()
const app = express();

connectDB()

app.use(cors())
app.use(express.json())

app.use("/api/notes",NotesRoute)



const port = process.env.PORT || 8000;

app.listen(port, ()=> console.log(`App running on port ${port}`))