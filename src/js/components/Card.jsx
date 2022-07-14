import React from "react";

const Card = (props) => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12 col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{props.deimian}</h5>
              <p className="card-text">
               {props.description}
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
