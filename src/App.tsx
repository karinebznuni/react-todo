import { Todo } from "./Todo";
import "./App.css";
import { useEffect, useState } from "react";

type Todo = {
  text: string;
  completed: boolean;
};

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputText, setInputText] = useState<string>("");

  useEffect(() => {
    setTodos([
      {
        completed: false,
        text: "first",
      },
      {
        completed: false,
        text: "second",
      },
    ]);
  }, []);

  return (
    <div className="container">
      <h1 className="text-center">TODO</h1>
      <hr />
      <div className="d-flex">
        <input
          value={inputText}
          placeholder="Text"
          type="text"
          className="form-control me-2"
          onChange={(e) => {
            setInputText(e.target.value);
          }}
        />
        <button className="btn btn-success">ADD</button>
      </div>
      <div className="mt-2">
        {todos.map((todo, index) => {
          return <Todo key={index} text={todo.text} completed={todo.completed} />;
        })}
      </div>
    </div>
  );
}

export default App;
