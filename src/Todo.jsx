import React, { useState } from "react";
import TodoItem from "./Listitem";
import useStore from "./store/store";

const App = () => {
  const [todos, setTodos] = useState([]);
  const todoValue = useStore((state) => state.addtoodo);
  const deleteValue = useStore((state) => state.removetodo);
  const updateValue = useStore((state) => state.updatetodo);


  const value = useStore((state) => state.todo);
  

  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
 
   todoValue( {id: Date.now(), text: newTodo });
    console.log(todos, newTodo)
    setNewTodo("");
    
  };

  const deleteTodo = (id) => {
    deleteValue(id);
  };

  const updateTodo = (id, text) => {
   updateValue(id, text);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-4 bg-white rounded shadow-md">
        <h1 className="text-2xl font-bold mb-4">Todo App</h1>
        <div className="mb-4">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            className="w-full p-2 border rounded focus:outline-none"
            placeholder="Add a new todo"
          />
          <button
            onClick={addTodo}
            className="w-full mt-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Add Todo
          </button>
        </div>
        <ul>
          {value.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              deleteTodo={deleteTodo}
              updateTodo={updateTodo}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
