import { Todo } from "./Todo";
import "./App.css";
import { useEffect, useState } from "react";
import { Filters } from "./Filters";

type Todo = {
  text: string;
  completed: boolean;
  id: number;
};

type TodoFilter = "ALL" | "IN_PROGRESS" | "COMPLETED";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputText, setInputText] = useState<string>("");
  const [todoFIlter, setTodoFilter] = useState<TodoFilter>("ALL");

  useEffect(() => {
    setTodos([
      {
        completed: false,
        text: "first",
        id: 0,
      },
      {
        completed: false,
        text: "second",
        id: 1,
      },
    ]);
  }, []);

  const handleAddTodo = () => {
    const newTodo = {
      text: inputText,
      completed: false,
      id: todos.length,
    };

    setTodos([...todos, newTodo]);
    setInputText("");
  };
  const handleDeleteTodo = (id: number) => {
    const filteredTodos = todos.filter((todo) => {
      return todo.id !== id;
    });

    setTodos(filteredTodos);
  };

  const handleCheckedTodo = (index: number) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
    console.log(updatedTodos[index].completed);
  };

  const handleFilterTodo = (filterState: TodoFilter) => {
    setTodoFilter(filterState);
  };

  let filteredTodos: Todo[] = [];
  if (todoFIlter === "COMPLETED") {
    filteredTodos = todos.filter((todo) => {
      return todo.completed;
    });
  } else if (todoFIlter === "IN_PROGRESS") {
    filteredTodos = todos.filter((todo) => {
      return !todo.completed;
    });
  } else {
    filteredTodos = todos;
  }


  const handleEditTodo = (id: number, newText: string) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, text: newText };
      } else {
        return todo;
      }
    });
    setTodos(updatedTodos);
  };

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
        <button className="btn btn-success" onClick={handleAddTodo}>
          ADD
        </button>
      </div>
      <div className="mt-4 mb-4">
        <Filters onFilter={handleFilterTodo} />
      </div>
      <div className="mt-2">
        {filteredTodos.map((todo, index) => {
          return (
            <Todo
              key={index}
              text={todo.text}
              completed={todo.completed}
              id={todo.id}
              onDelete={() => handleDeleteTodo(todo.id)}
              onChecked={() => handleCheckedTodo(index)}
              onEdit={handleEditTodo}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
