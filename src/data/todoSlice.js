import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    list: [
      { text: "todo 1", done: false },
      { text: "todo 2", done: false },
      { text: "todo 3", done: false },
      { text: "todo 4", done: false },
    ],
  },
  reducers: {
    addTodo: (state, action) => {
      console.log("add");
      state.list.push({ text: action.payload.text, done: false });
    },
    deleteTodo: (state, action) => {
      console.log("delete");
      state.list.splice(action.payload.index, 1);
    },
    toggleTodo: (state, action) => {
      console.log("toggle");
      state.list[action.payload.index].done =
        !state.list[action.payload.index].done;
    },
  },
});

export default todoSlice;
