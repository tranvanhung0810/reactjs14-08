import React from "react";
import { useParams } from "react-router";
import Form from "../components/Form";

const AddNote = () => {
  const { id } = useParams();
  return <Form id={id} />;
};

export default AddNote;
