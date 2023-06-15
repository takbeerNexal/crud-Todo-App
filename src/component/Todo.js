// Todo.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../reduxStore/todoSlice";
import "../App.css";

const Todo = ({ id, text, completed }) => {
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const [updatedText, setUpdatedText] = useState(text);

  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleUpdate = () => {
    dispatch(
      updateTodo({
        id,
        text: updatedText,
      })
    );
    setEditMode(false);
  };

  return (
    <div className="todo mt-3 border-bottom">
      {editMode ? (
        <input
          type="text"
          value={updatedText}
          onChange={(e) => setUpdatedText(e.target.value)}
        />
      ) : (
        <span>{text}</span>
      )}
      {/* <button class="btn btn-primary" type="button" onClick={handleToggle}>
        {completed ? "Mark Incomplete" : "Mark Complete"}
      </button> */}

      <div>
        <button class="btn btn-danger m-2  " onClick={handleDelete}>
          Delete
        </button>
        {editMode ? (
          <button class="btn btn-success  m-2 " onClick={handleUpdate}>
            Save
          </button>
        ) : (
          <button class="btn btn-info  m-2 " onClick={handleEdit}>
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default Todo;
