import "./App.css";
import TodoList from "./components/TodoList";
import DoneList from "./components/DoneList";

function App() {
  return (
    <div className="App">
      <h1>TO DO List App</h1>
      <h2>TO DO</h2>
      <TodoList
        items={[
          "Move hardcoded tasks into state",
          "Implement complete button",
          "Implement delete button",
        ]}
      />
      <h2>DONE</h2>
      <DoneList items={[]} />
    </div>
  );
}

export default App;
