/* eslint-disable no-unused-labels */
import React from "react";
import { useHistory } from "react-router";
import { useNotesContext } from "../contexts/NoteContext";
import NoteList from "../components/Notelist";

const App = () => {
  const { notes } = useNotesContext();
  const history = useHistory();

  console.log(notes);

  const onAdd = () => {
    history.push("/note/add");
  };

  return (
    <div className="container">
      <button onClick={onAdd}>Add</button>
      <NoteList items={notes} />
    </div>
  );
};

export default App;
