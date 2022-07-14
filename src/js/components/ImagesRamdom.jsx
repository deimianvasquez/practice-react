import React from "react";


const ImagesRandom =(props)=>{
  return(
   
        <div className="col-12 d-flex border border-danger my-2">
          <img src={props.image} alt="Imagen" className="mx-2" />
          <p>
            descripcion
          </p>
        </div>
     
  );
}

export default ImagesRandom;