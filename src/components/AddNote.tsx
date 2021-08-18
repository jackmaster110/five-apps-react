import React from "react";

interface AddNoteProps {
    changeTitle: (event: React.ChangeEvent<HTMLInputElement>) => void;
    changeDesc: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    addNote: (event: React.FormEvent<HTMLFormElement>) => void;
}

function AddNote(props: AddNoteProps) {
    return(
        <div className="note">
            <form onSubmit={props.addNote}>
                <input type="text" placeholder="Note Title" onChange={props.changeTitle} />
                <textarea placeholder="Note Body" onChange={props.changeDesc}></textarea>
                <input type="submit" value="Add Note" />
            </form>
        </div>
    );
}

export default AddNote;