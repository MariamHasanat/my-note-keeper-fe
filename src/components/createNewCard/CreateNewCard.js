import React, { useState } from 'react'


const CreateNewCard = () => {
    const [note, setNote] = useState({
        title: '',
        content: '',
        creationDate: null //Date.now()
    })

    const clearInputs = () => {
        setNote({
            title: '',
            content: '',
            creationDate: null
        })
    
    }
    return (
        <form>
            <input type='text' value={note.title} name='title' placeholder='ex: playing' onChange={(e) => setNote({ ...note, title: e.target.value })} />
            <input type='text' value={note.content} name='content' placeholder='ex: play with sister' onChange={(e) => setNote({ ...note, content: e.target.value })} />
            <button onClick={async (e) => {
                e.preventDefault();
                let date = Date.now();
                await setNote(prev => ({ ...prev, creationDate: date }))
                console.log({ ...note, creationDate: date });
                clearInputs();
                
            }}>save</button>
            <button onClick={async (e) => {
                e.preventDefault();
                console.log(note);
            }}>print</button>
            <button onClick={(e)=>{
                e.preventDefault();
                clearInputs();
            }}>cancel</button>
        </form>
    )
}

export default CreateNewCard