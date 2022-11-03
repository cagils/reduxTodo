import "./App.css";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";

function App() {
  return (
    <main>
      <div>
        <TodoHeader />
        <TodoList />
      </div>
    </main>
  );
}

export default App;
