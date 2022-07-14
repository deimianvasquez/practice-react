import React from "react";

function Task(props){
  return(
    <div className="col-12 col-md-6">
      <label>{props.title}</label>      
      <p>
        {props.description}
      </p>
      <h3>{props.done}</h3>
    </div>
  );
}

export default Task;