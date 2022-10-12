import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import todoSlice from "../data/todoSlice";
import AddTodoForm from "./AddTodoForm";
import "./TodoList.css";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.list);

  const actionDeleteTodo = todoSlice.actions.deleteTodo;
  const actionToggleTodo = todoSlice.actions.toggleTodo;

  return (
    <div className="list">
      {todos.map((todo, i) => (
        <div className="item" key={i}>
          <span
            className="itemCheck"
            onClick={() => dispatch(actionToggleTodo({ index: i }))}
          >
            {todo.done ? "✓" : ""}
          </span>
          <span className={`itemText ${todo.done && "itemDone"}`}>
            {todo.text}
          </span>
          <span className="itemButton">
            <button
              id="deleteButton"
              onClick={() => dispatch(actionDeleteTodo({ index: i }))}
            >
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
