import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoList from "./TodoList";

const LOCAL_STORAGE_KEY = "react-todo-list-todos";

const TodoForm = () => {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false,
  });

  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const InputOnChangeHandler = (e) => {
    setTodo({ ...todo, task: e.target.value });
  };

  const OnSubmitHandler = (e) => {
    e.preventDefault();

    if (todo.task.trim()) {
      addTodo({ ...todo, id: uuidv4() });
      setTodo({ ...todo, task: "" });
    }
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos) {
      setTodos(storageTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos), [todos]);
  });

  return (
    <form
      onSubmit={OnSubmitHandler}
      className="w-96 h-auto mt-10 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-xl"
    >
      <div className="flex justify-center p-9">
        <input
          label="Task"
          type="text"
          name="task"
          className="rounded-md p-2"
          placeholder="Your task"
          onChange={InputOnChangeHandler}
          value={todo.task}
        />
      </div>{" "}
      <div className="flex justify-center">
        {" "}
        <button
          type="submit"
          className="px-4 py-2 mb-5 text-white font-bold bg-gradient-to-r from-green-400 to-blue-500 rounded-md "
        >
          Add
        </button>
      </div>
      <TodoList
        todos={todos}
        toggleComplete={toggleComplete}
        removeTodo={removeTodo}
      />
    </form>
  );
};

export default TodoForm;
