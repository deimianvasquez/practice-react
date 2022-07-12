import React from "react";

const Menu =()=>{
  let style = {
    border:"1px solid red",
    color:"red",
    backgroundColor:"red"
  }

  return(
    <nav className="navbar bg-light" style={style}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="/docs/5.2/assets/brand/bootstrap-logo.svg" 
            alt="" 
            width="30" 
            height="24" 
            className="d-inline-block align-text-top" 
          />
          Bootstrap
        </a>
      </div>
    </nav>
  );
}

export default Menu;