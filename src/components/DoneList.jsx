import React from "react";

const DoneList = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <li>
          <div>
            <span>{item}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default DoneList;
