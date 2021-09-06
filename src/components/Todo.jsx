const Todo = ({ todo, toggleComplete, removeTodo }) => {
  const handleCheckBoxOnClick = () => {
    toggleComplete(todo.id);
  };
  const handleRemoveOnClick = () => {
    removeTodo(todo.id);
  };
  return (
    <div className="flex justify-center p-10">
      <div className="inline-block mx-5">
        {" "}
        <input
          type="checkbox"
          checked={todo.completed}
          onClick={handleCheckBoxOnClick}
        />
      </div>
      <div className="inline-block mx-5">
        <p
          className="text-black"
          style={{
            color: "white",
            textDecoration: todo.completed ? "line-through" : null,
          }}
        >
          {todo.task}
        </p>
      </div>
      <div
        className="inline-block mx-5 text-white"
        onClick={handleRemoveOnClick}
      >
        <button>X</button>
      </div>
    </div>
  );
};

export default Todo;
