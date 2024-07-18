import React, { useState } from 'react';

const TodoItem = ({ todo, deleteTodo, updateTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleUpdate = () => {
    updateTodo(todo.id, newText);
    setIsEditing(false);
  };

  return (
    <li className="flex items-center justify-between p-2 border-b">
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          className="w-full p-2 border rounded focus:outline-none"
        />
      ) : (
        <span>{todo.text}</span>
      )}
      <div className="flex items-center space-x-2">
        {isEditing ? (
          <button
            onClick={handleUpdate}
            className="p-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Edit
          </button>
        )}
        <button
          onClick={() => deleteTodo(todo.id)}
          className="p-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
