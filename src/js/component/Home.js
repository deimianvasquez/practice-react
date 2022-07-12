import React from "react";
import Saludar from "./Saludar.jsx";
import Menu from "./Menu.jsx";

function Home() {
  let name = "Deimian";
  let style = {
    border:"1px solid red",
    color:"red",
    backgroundColor:"black"
  }
  
  return (
    <>
      <Menu />
      <h1 style={style}>Hola desde Home components</h1>
      <Saludar />
    </>
  );
}

export default Home;
