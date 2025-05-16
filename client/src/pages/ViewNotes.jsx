import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"


const ViewNotes = () => {
    const [notes, setNotes] = useState([]);
    const { id } = useParams()
      useEffect(()=>{
        const fetchNotes = async () => {
          const AllNotes = await fetch(`${import.meta.env.VITE_API_URL}/api/notes/${id}`);
          const data =await AllNotes.json();
          setNotes(data)
    
        }
        fetchNotes()
      },[id])
  return (
     <div className="flex items-center justify-center min-h-[100vh] bg-red-100">
            <div className="py-2 w-full max-w-[40rem]">
                <div className="flex items-center justify-evenly">
                    <Link to="/" className='flex items-center gap-2 text-2xl py-2 px-4 rounded bg-red-500 text-white cursor-pointer'>
                        <i className='bx bx-notepad'></i>
                        <span>All Notes</span>
                        </Link>
                    <Link to="/create" className='flex items-center gap-2 text-2xl py-2 px-4 rounded bg-red-500 text-white cursor-pointer'>
                        <i className='bx bx-plus'></i>
                        <span>Create Notes</span>
                        </Link>
                </div>

                 <div className="py-3 px-4 rounded bg-white mt-5 relative">
                    <i className="bx bx-planet absolute top-0 left-0 text-red-500 text-2xl"></i>
                    <i className="bx bx-planet absolute top-0 right-0 text-red-500 text-2xl"></i>
                    <i className="bx bx-planet absolute bottom-0 right-0 text-red-500 text-2xl"></i>
                    <i className="bx bx-planet absolute bottom-0 left-0 text-red-500 text-2xl"></i>
                    <div className="flex items-center justify-center gap-2 text-2xl">
                           <i className='bx bx-add-to-queue text-red-600'></i>
                           <h2 className='font-semibold text-red-500'>{notes.title}</h2>
                    </div>
                    <p className="text-center">{notes.content}</p>
                    <p className="py-3 text-xl text-red-500 text-center">{notes.date}</p>
                 </div>

            </div>
        </div>
  )
}

export default ViewNotes
