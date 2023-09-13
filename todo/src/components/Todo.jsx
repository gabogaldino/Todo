import React from 'react'

export const Todo = ({ todo }) => {
  return (
    <div className="todo">
    <div className="content">
      <p>{todo.text}</p>
      <p className="category">({todo.category})</p>
      </div>
      <div>
      <button>Completar</button>
      <button>x</button>
        </div>
      </div>
  );
};

export default Todo;
