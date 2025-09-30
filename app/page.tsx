import Image from "next/image";
import styles from "./page.module.css";
import "bootstrap/dist/css/bootstrap.css";
import { Portada } from "./components/portada";
import { CardColumn, Categoria } from "./components/categorias";
import { Info } from "./components/Informacion";
import { Button } from "./components/Button";

export default function Home() {
  return (
    <main>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Portada
              titulo="Punta Cana"
              text="se conoce como 
              La Costa del Coco, un área con 
              exclusivos centros turísticos con 
              todo incluido. Es popular por sus 
              tirolesas, el windsurf, el kayak y la 
              navegación"
              className="colorAqua"
              image="/img/punta cana.png"
            />
          </div>
          <div className="carousel-item">
            <Portada
              titulo="Santo Domingo"
              text="una de las ciudades más antiguas 
              del Caribe. Su centro histórico amurallado
               y con adoquines, la Zona Colonial, tiene 
               edificios que datan del siglo XVI, incluida
                la catedral, que fue la primera construida 
                en el Nuevo Mundo. En la Plaza de España, 
                bordeada de cafés, se encuentra el palacio 
                Alcázar de Colón. Actualmente, es uno 
                de los diversos museos de la ciudad que 
                exhiben obras de arte medievales y 
                renacentistas destacadas."
              image="/img/santo domingo.png"
              className="colorBrown"
            />
          </div>
          <div className="carousel-item">
            <Portada
              text="es una ciudad del norte de 
                    República Dominicana. Sobre un cerro
                    está el Monumento de Santiago, de 1944, 
                    con una columna blanca en su parte superior
                    y que está dedicado a los héroes de la Guerra
                    de la Restauración Dominicana. En el centro 
                    cultural Centro León, se exhibe arte dominicano.
                    La Fortaleza San Luis, del siglo XVII, es 
                    actualmente un museo con tanques y equipamiento
                    militar. El Parque Duarte tiene senderos, árboles
                    tropicales y un quiosco de música."
              titulo="Santiago"
              image="/img/santiago.png"
              className="bg-body-secondary"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* <Portada className="colorAqua" text="loren" titulo="Punta Cana" /> */}

      <Categoria>
        <CardColumn
          image={"/img/portada news.png"}
          titulo="NOTICIAS"
          text="Enterate de todo lo que acontese en republica dominicana"
        >
          <Button name="ver mas" href="noticias" />
        </CardColumn>
        <CardColumn
          image={"/img/portada lugares.png"}
          titulo="LUGARES"
          text="Disfrutas de los paraisos que ofrese la republicia dominicana"
        >
          <Button name="ver mas" href="lugares" />
        </CardColumn>
        <CardColumn
          image={"/img/evento portada.png"}
          titulo="EVENTOS"
          text="Disfrutas de los eventos que ofrese la republicia dominicana"
        >
          <Button name="ver mas" href="eventos" />
        </CardColumn>
      </Categoria>
      <Info />
    </main>
  );
}
