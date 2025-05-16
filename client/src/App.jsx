import  { ToastContainer,toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Homepage from "./pages/Homepage";
import "./boxicons/css/boxicons.min.css"
import CreateNote from "./pages/CreateNote";
import EditNotes from "./pages/EditNotes";
import ViewNotes from "./pages/ViewNotes";




const App = () => {

  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/create" element={<CreateNote />} />
        <Route path="/edit/:id" element={<EditNotes />} />
        <Route path="/view/:id" element={<ViewNotes />} />
      </Routes>
    </Router>
  )
}

export default App 