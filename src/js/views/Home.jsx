import React from "react";
import Card from "../components/Card.jsx";
import Carousel from "../components/Carousel.jsx";
import TitleH1 from "../components/TitleH1.jsx";
import Task from "../components/Task.jsx";
import ImagesRandom from "../components/ImagesRamdom.jsx";

function Home() {
  let lista = [
    {
      title: "Se acaba el mundo",
      description: "Se termino esto llegaron los zombis",
    },
    {
      title: "4geeks gratis",
      description: "Quieren aprender 4geeks es gratis para todos los zombies",
    },
    {
      title: "Octavio es el nuevo presidente",
      description: "arreglas los hospitales",
    },
  ];

  let listTask = [
    {
      title: "Bañar al perro",
      description: "Debes bañar al perro huele mal",
      done: "Falso",
    },
    {
      title: "Hacer café",
      description: "debe ser colado, de cafetera no me gusta",
      done: "Falso",
    },
    {
      title: "Bañar al fato",
      description: "Debes bañar al gato pero no en la lavadora",
      done: "Falso",
    },
    {
      title: "Bañar al fato",
      description: "Debes bañar al gato pero no en la lavadora",
      done: "Falso",
    },
    {
      title: "Bañar al fato",
      description: "Debes bañar al gato pero no en la lavadora",
      done: "Falso",
    },
  ];

  let images = [
    {
      url_image: "https://picsum.photos/id/10/80/80",
      description: "una descripcion",
    },
    {
      url_image: "https://picsum.photos/id/10/80/80",
      description: "una descripcion",
    },
  ];

  return (
    <>
      <Carousel />
      <TitleH1
        title="Hola que tal desde las propiedades"
        color="text-success"
      />

      <TitleH1 title="Noticias" color="text-danger" />

      {lista.map((news, index) => {
        return (
          <Card
            key={index}
            deimian={news.title}
            description={news.description}
          />
        );
      })}

      <TitleH1 title="Imagenes Ramdom" color="text-warning" />
      <div className="container">
        <div className="row">
          {images.map((img, index) => {
            return (
              <ImagesRandom
                key={index}
                image={img.url_image}
                description={img.description}
              />
            );
          })}
        </div>
      </div>

      <div className="container">
        <div className="row">
          <TitleH1 title="Tareas" color="text-primary" />
          {listTask.map((task, index) => {
            return (
              <Task
                key={index}
                title={task.title}
                description={task.description}
                done={task.done}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Home;
