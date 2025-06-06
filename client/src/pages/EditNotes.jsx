import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify";


const EditNotes = () => {
    const [notes, setNotes] = useState({title: '', content: '', date: ''})
    const { id } = useParams()
    const navigate = useNavigate()
      useEffect(()=>{
        const fetchNotes = async () => {
          const AllNotes = await fetch(`${import.meta.env.VITE_API_URL}/api/notes/${id}`);
          const data =await AllNotes.json();
          setNotes(data)
    
        }
        fetchNotes()
      },[id])

       const TrackNotes = e => setNotes({...notes, [e.target.name]: e.target.value});

      const UpdateNotes = async (e) => {
              e.preventDefault();
               try {
                   const response =  await fetch(`${import.meta.env.VITE_API_URL}/api/notes/${id}`,{
              method:'PUT',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify(notes)
            });
            if(response.ok){
              toast.success("Note Updated Successfully");
              navigate("/")
            }
               } catch (error) {
                  toast.error(error)
               }
             }
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
                 <form onSubmit={UpdateNotes} className="py-3 px-4 rounded bg-white mt-5">
                    <div className="flex items-center justify-center gap-2 text-2xl">
                           <i className='bx bx-add-to-queue text-red-600'></i>
                           <h2 className='font-semibold text-red-500'>Create New Note</h2>
                    </div>
                    <div className="mt-4 flex flex-col gap-3">
                        <div className="flex flex-col gap-1">
                            <h2 className='text-xl font-bold italic text-red-400'>Title</h2>
                            <input name='title' value={notes.title} onChange={TrackNotes} type="text" className='py-2 px-4 border border-red-500 outline-none' placeholder='Enter the title of this note' />
                        </div>
                        <div className="flex flex-col gap-1">
                            <h2 className='text-xl font-bold italic text-red-400'>Content</h2>
                            <textarea name='content' value={notes.content} onChange={TrackNotes}  className='py-2 px-4 border border-red-500 outline-none' placeholder='Enter the content of this note' />
                        </div>
                        <div className="flex flex-col gap-1">
                            <h2 className='text-xl font-bold italic text-red-400'>Content</h2>
                            <input name='date' value={notes.date} onChange={TrackNotes} type='date'  className='py-2 px-4 border border-red-500 outline-none' placeholder='Enter the content of this note' />
                        </div>
                    </div>
                    <button type="submit"  className='flex items-center w-full my-3 gap-2 text-2xl py-2 px-4 rounded bg-red-500 text-white cursor-pointer'>
                        <i className='bx bx-plus'></i>
                        <span>Create Notes</span>
                        </button>
                 </form>
            </div>
        </div>
  )
}

export default EditNotes
