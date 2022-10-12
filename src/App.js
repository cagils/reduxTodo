import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  return (
    <main>
      <div>
        <div>
          <h1 className="header">TODO</h1>
        </div>
        <TodoList />
      </div>
    </main>
  );
}

export default App;
