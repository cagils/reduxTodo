import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    list: [
      { id: 1, text: "todo 1", done: false },
      { id: 2, text: "todo 2", done: false },
      { id: 3, text: "todo 3", done: false },
      { id: 4, text: "todo 4", done: false },
    ],
  },
  reducers: {
    addTodo: (state, action) => {
      console.log("add");
      state.list.push({ id: nanoid(), text: action.payload.text, done: false });
    },
    deleteTodo: (state, action) => {
      console.log("delete");
      state.list = state.list.filter((todo) => todo.id !== action.payload.id);
    },
    toggleTodo: (state, action) => {
      console.log("toggle");
      const idx = state.list.findIndex((todo) => todo.id === action.payload.id);
      if (idx >= 0) {
        state.list[idx].done = !state.list[idx].done;
      }
    },
  },
});

export default todoSlice;
