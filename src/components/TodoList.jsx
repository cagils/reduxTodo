import { useState } from "react";

import useTodo from "../hooks/useTodo";
import AddTodoForm from "./AddTodoForm";
import "./TodoList.css";

const TodoList = () => {
  const { todos, toggleTodo, deleteTodo } = useTodo();

  return (
    <div className="list">
      {todos.map((todo) => (
        <div className="item" data-id={todo.id} key={todo.id}>
          <span className="itemCheck" onClick={() => toggleTodo(todo)}>
            {todo.done ? "✓" : ""}
          </span>
          <span className={`itemText ${todo.done && "itemDone"}`}>
            {todo.text}
          </span>
          <span className="itemButton">
            <button id="deleteButton" onClick={() => deleteTodo(todo)}>
              Delete
            </button>
          </span>
        </div>
      ))}
      <AddTodoForm />
    </div>
  );
};
export default TodoList;
