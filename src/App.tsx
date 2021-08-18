import React, { useEffect, useState } from "react";
import NotesList from "components/NotesList";
import { NoteType } from "components/Note";
//import "scss/App.scss";

function App() {
    const [notesList, setNotesList] = useState<NoteType[]>([]);

    const [noteTitle, setNoteTitle] = useState<string>("");
    const [noteDesc, setNoteDesc] = useState<string>("");

    useEffect(() => {
        const data = localStorage.getItem("notes");
        if (data) {
            setNotesList(JSON.parse(data));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notesList));
    }, [notesList])

    const addNote = (event: React.FormEvent<HTMLFormElement>) => {
        let note: NoteType = {
            title: noteTitle,
            desc: noteDesc,
        };
        setNotesList([...notesList, note]);
        event.preventDefault();
    };

    const changeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNoteTitle(event.currentTarget.value);
    };

    const changeDesc = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNoteDesc(event.currentTarget.value);
    };

    return (
        <div className="container">
            <header>
                <h1>Notes App</h1>
            </header>
            <NotesList addNote={addNote} changeTitle={changeTitle} changeDesc={changeDesc} notes={notesList} />
        </div>
    );
}

export default App;
