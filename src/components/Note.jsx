import React from "react";
import { useHistory } from "react-router";

const Note = ({ item }) => {
  const history = useHistory();

  const onClickView = () => {
    history.push(`/note/view/${item.id}`);
  };

  return (
    <div className="note-item">
      <div className="note-content">{item.content}</div>
      <div className="note-action">
        <button onClick={onClickView}>View</button>
      </div>
    </div>
  );
};

export default Note;
