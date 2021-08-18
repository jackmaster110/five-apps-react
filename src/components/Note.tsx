import React from "react";

export type NoteType = {
    title: string;
    desc: string;
}

interface NoteProps {
    note: NoteType;
}

function Note(props: NoteProps) {
    return (
        <div className="note">
            <h4>{props.note.title}</h4>
            <span>{props.note.desc}</span>
        </div>
    );
}

export default Note;
