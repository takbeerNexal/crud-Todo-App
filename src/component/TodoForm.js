// TodoForm.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../reduxStore/todoSlice";

const TodoForm = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      dispatch(
        addTodo({
          id: Date.now(),
          text: inputValue.trim(),
          completed: false,
        })
      );
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <button class="btn btn-primary m-2" type="submit">
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
