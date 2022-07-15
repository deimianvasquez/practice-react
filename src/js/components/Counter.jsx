import React, { useState } from "react";

const Counter = () => {
  //useState es un estado global del componente
  //     estado, funcion que modifica el estado = useState(tipo de dato que inicializa el estado)
  const [count, setCount] = useState(5);

  const sumCount = () => {
    setCount(count + 1);
  };

  const restaCount=()=>{
    setCount(count-1)
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Este es mi contador</h1>
          </div>
          <div className={`col-12 ${count <= 0 ? "bg-warning": "bg-success"}`}>
            <h1>valor: {count}</h1>

            <button
              type="button"
              className="btn btn-success mx-5"
              onClick={sumCount}
            >
              Incrementar
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={restaCount}
            >
              Decrementar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Counter;
