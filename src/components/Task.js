import React from "react";

function Task({category,text,id,clicked}) {  
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={(e) => clicked(id)}>X</button>
    </div>
  );
}

export default Task;
