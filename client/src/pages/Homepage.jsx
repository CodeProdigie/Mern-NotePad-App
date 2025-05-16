import  { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const Homepage = () => {
  const [notes, setNotes] = useState([]);
  useEffect(()=>{
    const fetchNotes = async () => {
      const AllNotes = await fetch("http://localhost:8000/api/notes");
      const data =await AllNotes.json();
      setNotes(data)
    }
    fetchNotes()
  },[])

  const DeleteWorker = (id) => {
      const confirmDelete = window.confirm("Do you want to delete?");
      if(!confirmDelete) return
      try {
         const Deleting = async () => {
            const response = await fetch(`http://localhost:8000/api/notes/${id}`,{
              method: 'DELETE'
            })
            if(response.ok){
              setNotes(prev => prev.filter(notes => notes._id != id))
            }
        }
        Deleting()
      
      } catch (error) {
        console.error(error)
      }

      
    }
  return (
    <div className="flex items-center justify-center min-h-[100vh] bg-red-100">
        <div className="py-2 w-full max-w-[60rem]">
            <div className="flex flex-wrap items-center justify-evenly">
                <Link to="/" className='flex  items-center gap-2 text-2xl py-2 px-4 rounded bg-red-500 text-white cursor-pointer'>
                    <i className='bx bx-notepad'></i>
                    <span>All Notes</span>
                    </Link>
                <Link to="/create" className='flex items-center gap-2 text-2xl py-2 px-4 rounded bg-red-500 text-white cursor-pointer'>
                    <i className='bx bx-plus'></i>
                    <span>Create Notes</span>
                    </Link>
            </div>
            <div className="py-15">
                <div className="flex items-center gap-4 flex-wrap">
                   {notes.map(({_id,title,date,content})=> (
                     <div className="py-2 px-4 rounded bg-red-200" key={_id}>   
                          <div className="flex items-center gap-2">
                            <i className='bx bx-note text-xl text-red-700'></i>
                            <h2 className='text-3xl py-3 border-b'>{title}</h2>
                          </div>
                          <Link to={`/view/${_id}`} className='flex w-full mt-3 items-center gap-2 text-2xl py-2 px-4 rounded bg-red-400 text-white cursor-pointer'>
                    <i className='bx bx-edit'></i>
                    <span>View Note</span>
                    </Link>
                          <div className="flex items-center gap-3 py-3">
                             <Link to={`/edit/${_id}`} className='flex items-center gap-2 text-2xl py-2 px-4 rounded bg-red-400 text-white cursor-pointer'>
                    <i className='bx bx-edit'></i>
                    <span>Edit Notes</span>
                    </Link>
                             <button onClick={()=> DeleteWorker(_id)} className='flex items-center gap-2 text-2xl py-2 px-4 rounded bg-red-400 text-white cursor-pointer'>
                    <i className='bx bx-trash'></i>
                    <span>Delete Notes</span>
                    </button>
                          </div>
                    </div>
                   ))}
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Homepage