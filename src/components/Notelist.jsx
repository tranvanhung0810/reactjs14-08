import React from "react";
import Note from "./Note";

const NoteList = ({ items = [] }) => {
  return (
    <div className="note-list">
      {items.map((item) => (
        <Note key={item.id} item={item} />
      ))}
    </div>
  );
};

export default NoteList;
