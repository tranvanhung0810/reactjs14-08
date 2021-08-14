import React from "react";

const uuid = () => "id" + new Date().getTime();

const initItems = [
  {
    id: uuid(),
    content: "Hello"
  }
];

const NoteContext = React.createContext();
const ADD_NOTE = "ADD_NOTE";
const EDIT_NOTE = "EDIT_NOTE";
const DELETE_NOTE = "DELETE_NOTE";

const notesReducer = (state, action) => {
  switch (action.type) {
    case ADD_NOTE: {
      const notes = [...state.notes, action.payload];
      console.log(notes);
      return {
        ...state,
        notes
      };
    }

    case EDIT_NOTE: {
      const notes = state.notes.map((note) => {
        if (note.id === action.payload.id) {
          return { ...note, content: action.payload.content };
        }

        return note;
      });

      return {
        ...state,
        notes
      };
    }
    case DELETE_NOTE: {
      const deleteIndex = state.notes.findIndex(
        (item) => action.payload.id === item.id
      );
      const notes = [...state.notes];
      if (deleteIndex > -1) {
        notes.splice(deleteIndex, 1);
      }

      return {
        ...state,
        notes
      };
    }

    default:
      throw new Error(`Action is not supported: ${action.type}`);
  }
};

const initialState = {
  notes: initItems
};

export const NoteProvider = (props) => {
  const [state, dispatch] = React.useReducer(notesReducer, initialState);

  const value = React.useMemo(() => ({ state, dispatch }), [state]);

  return <NoteContext.Provider value={value} {...props} />;
};

export const useNotesContext = () => {
  const context = React.useContext(NoteContext);

  if (!context) {
    throw new Error("useMoviesContext must be used inside a MoviesProvider");
  }

  const { state, dispatch } = context;
  const { notes } = state;

  const addNote = (content) => {
    const note = {
      id: uuid(),
      content
    };
    console.log("note");
    dispatch({ type: ADD_NOTE, payload: note });
  };

  const editNote = (id, content) => {
    dispatch({ type: EDIT_NOTE, payload: { id, content } });
  };

  const deleteNote = (id) => {
    dispatch({ type: DELETE_NOTE, payload: { id } });
  };

  const getNoteFromId = (id) => {
    return notes.find((note) => note.id == id);
  };

  return { notes, addNote, editNote, deleteNote, getNoteFromId };
};
