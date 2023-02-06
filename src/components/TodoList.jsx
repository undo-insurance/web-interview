import React from "react";

const TodoList = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <li>
          <div>
            <span>{item}</span>
            <button>complete</button>
            <button>delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
