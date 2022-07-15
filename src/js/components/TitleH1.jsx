import React from "react";

const TitleH1 =(props)=>{
  return(
    <div className="container my-5">
      <div className="row">
        <div className="col">
          <h1 className={props.color}>{props.title}</h1>
        </div>
      </div>
    </div>
  )
}

export default TitleH1;