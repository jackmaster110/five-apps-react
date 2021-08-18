import React from "react";
import AddNote from "components/AddNote";
import Note, { NoteType } from "components/Note";

type NotesListProps = {
    notes: NoteType[];
    addNote: (event: React.FormEvent<HTMLFormElement>) => void;
    changeTitle: (event: React.ChangeEvent<HTMLInputElement>) => void;
    changeDesc: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

function NotesList({ notes, addNote, changeTitle, changeDesc }: NotesListProps) {
    return (
        <main>
            {notes.map((note) => {
                return (
                    <Note
                        note={{
                            title: note.title,
                            desc: note.desc,
                        }}
                    />
                );
            })}
            <AddNote addNote={addNote} changeTitle={changeTitle} changeDesc={changeDesc} />
        </main>
    );
}

export default NotesList;
