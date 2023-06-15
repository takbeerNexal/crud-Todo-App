// TodoList.js
import React from "react";
import { useSelector } from "react-redux";

import Todo from "./Todo";

const TodoList = () => {
  const todos = useSelector((state) => state.todo.todos);
  if (todos.length === 0) {
    return <p>! No Todo in the List to display.</p>;
  }
  return (
    <div className="mt-3">
      <h2>List of Todo:</h2>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          id={todo.id}
          text={todo.text}
          completed={todo.completed}
        />
      ))}
    </div>
  );
};

export default TodoList;
