import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import todoSlice from "../data/todoSlice";

const useTodo = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo);

  const actions = todoSlice.actions;

  return {
    todos: todos,
    toggleTodo: (todo) => dispatch(actions.toggleTodo({ id: todo.id })),
    deleteTodo: (todo) => dispatch(actions.deleteTodo({ id: todo.id })),
  };
};

export default useTodo;
