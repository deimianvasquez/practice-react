import React from "react";
import Menu from "./components/Menu.jsx";
import Home from "./views/Home.jsx";

function Layout() {
  return (
    //retorna jsx
    <>
      <Menu />
      <Home/>
    </>
  );
}

export default Layout;
