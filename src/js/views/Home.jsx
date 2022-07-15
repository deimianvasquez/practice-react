import React from "react";
import Carousel from "../components/Carousel.jsx";
import TitleH1 from "../components/TitleH1.jsx";
import Counter from "../components/Counter.jsx";

function Home() {
  //estado global del components
  return (
    <>
      <Carousel />
      <TitleH1
        title="Hola que tal desde las propiedades"
        color="text-success"
      />

      <Counter/>
    </>
  );
}

export default Home;
