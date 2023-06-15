// TodoApp.js
import React from "react";
import TodoForm from "./component/TodoForm";
import TodoList from "./component/TodoList";

const TodoApp = () => {
  return (
    <div className="app">
      <div className="container">
        <h1>Todo App</h1>
        <TodoForm />
        <TodoList />
      </div>
    </div>
  );
};

export default TodoApp;
