/* eslint-disable no-unused-labels */
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { NoteProvider } from "./contexts/NoteContext";
import ListNote from "./routes/ListNote";
import AddNote from "./routes/AddNote";
import NoteDetail from "./routes/NoteDetail";

import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import 'font-awesome/css/font-awesome.min.css';
const App = () => {
  return (
    <NoteProvider>
      <Header/>
      <Router>
        <Switch>
          <Route path="/notes" exact component={ListNote} />
          <Route path="/note/view/:id" exact component={NoteDetail} />
          <Route path="/note/:id" exact component={AddNote} />
          <Route path="*" component={ListNote}></Route>
        </Switch>
      </Router>
    </NoteProvider>
  );
};

export default App;
