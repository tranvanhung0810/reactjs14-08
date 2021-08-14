import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useNotesContext } from "../contexts/NoteContext";

const Form = ({ id }) => {
  const contentRef = useRef(null);
  const { addNote, editNote, getNoteFromId } = useNotesContext();
  const history = useHistory();

  useEffect(() => {
    if (id !== "add") {
      const note = getNoteFromId(id);
      if (note && contentRef.current) {
        contentRef.current.value = note.content;
      }
    }
  }, [id]);

  const onSubmit = (e) => {
    e.preventDefault();

    if (contentRef.current && contentRef.current.value) {
      if (id !== "add") {
        editNote(id, contentRef.current.value);
      } else {
        addNote(contentRef.current.value);
      }
      history.push("/notes");
    }
  };

  return (
    <div className="form-container">
      <div className="form-title">Add note</div>
      <form className="note-form">
        <textarea name="content" ref={contentRef}></textarea>
        <button onClick={onSubmit} type="button" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
