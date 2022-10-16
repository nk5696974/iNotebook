import React, {useContext, useState} from 'react'
import noteContext from "../components/context/notes/noteContext"

const AddNote = (props) => {
    const context = useContext(noteContext);
    const {addNote } = context;

    const [note, setNote] = useState({title: "", description : "", tag: ""})

    const handleClick = (e) =>{
        e.preventDefault();
        addNote(note.title, note.description, note.tag)
        setNote({title: "", description : "", tag: "default"})
        props.showAlert("Added Note successfully", "success");
    }

    const onChange = (e) =>{
        setNote({...note, [e.target.name] : e.target.value})
    }

    return (
        <div>
            <div className='container my-3'>
                <h2>Add a note</h2>
                <form className='my-3 col-xs-4'>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input value={note.title} type="text" className="form-control" minLength={5} required id="title" name='title' aria-describedby="emailHelp" onChange={onChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <input value={note.description} type="text" className="form-control" minLength={5} required id="description" name='description' onChange={onChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tag" className="form-label">Tag</label>
                        <input value={note.tag} type="text" className="form-control" minLength={5} required id="tag" name='tag' onChange={onChange}/>
                    </div>
                    <button disabled={note.title.length<5 || note.description.length<5} type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
                </form>

            </div>
        </div>
    )
}

export default AddNote