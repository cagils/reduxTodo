import { useState } from "react";
import { useDispatch } from "react-redux";
import todoSlice from "../data/todoSlice";
import "./AddTodoForm.css";

const AddTodoForm = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState("");
  const actionAddTodo = todoSlice.actions.addTodo;
  const dispatch = useDispatch();

  const handleChange = (e) => setNewTodo(e.target.value);

  return (
    <div className="todoForm">
      <input
        type="text"
        onChange={handleChange}
        placeholder="add new todo"
        value={newTodo}
      />
      <button
        id="addButton"
        onClick={() => dispatch(actionAddTodo({ text: newTodo }))}
      >
        Add
      </button>
    </div>
  );
};
export default AddTodoForm;
