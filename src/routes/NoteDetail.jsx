import React from "react";
import { Redirect, useHistory, useParams } from "react-router-dom";

import { useNotesContext } from "../contexts/NoteContext";

const NoteDetail = () => {
  const history = useHistory();
  const { getNoteFromId, deleteNote } = useNotesContext();
  const { id } = useParams();
  const note = getNoteFromId(id);

  if (!note) {
    return <Redirect to="/notes"></Redirect>;
  }

  const onClickEdit = () => {
    history.push(`/note/${note.id}`);
  };

  const onClickDelete = () => {
    deleteNote(id);
  };

  return (
    <div>
      <p>{note.content}</p>
      <button onClick={onClickEdit}>Edit</button>
      <button onClick={onClickDelete}>Delete</button>
    </div>
  );
};

export default NoteDetail;
