import React from "react";
import Todo from "./Todo";
import { useState } from "react";
const TodoList = ({ todos, toggleComplete, removeTodo }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const [filterTerm, setFilterTerm] = useState("all");

  return (
    <div>
      <div className="flex justify-center p-5">
        {" "}
        <input
          type="text"
          className="p-1 rounded-md"
          placeholder="search..."
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </div>
      <div className="flex justify-center">
        <div
          onClick={() => setFilterTerm("all")}
          className="bg-white p-1 border rounded-md m-1 mb-10 cursor-pointer"
        >
          All
        </div>
        <div
          onClick={() => setFilterTerm("completed")}
          className="bg-white p-1 border rounded-md m-1 mb-10 cursor-pointer"
        >
          Completed
        </div>
        <div
          onClick={() => setFilterTerm("notcompleted")}
          className="bg-white p-1 border rounded-md m-1 mb-10 cursor-pointer"
        >
          Not-Completed
        </div>
      </div>
      {todos
        .filter((todo) => {
          if (searchTerm === "") {
            return todo;
          } else if (
            todo.task.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return todo;
          }
        })
        .filter((todo) => {
          if (filterTerm === "completed") {
            return todo.completed;
          } else if (filterTerm === "notcompleted") {
            return !todo.completed;
          } else if (filterTerm === "all") {
            return todo;
          }
        })
        .map((todo) => (
          <div>
            <Todo
              key={todo.id}
              todo={todo}
              toggleComplete={toggleComplete}
              removeTodo={removeTodo}
            />
          </div>
        ))}
    </div>
  );
};

export default TodoList;
