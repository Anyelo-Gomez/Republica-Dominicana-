import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function Categoria(props: Props) {
  return (
    <section className="container bg-body-dark my-5">
      <div className="row gap-3">{props.children}</div>
    </section>
  );
}

type PropsCard = {
  titulo?: string;
  text?: string;
  href?: string;
  image?: string;
  children?: ReactNode;
};

export function CardColumn(props: PropsCard) {
  return (
    <div className="col d-flex justify-content-center">
      <article
        className="card h-100 d-flex flex-column"
        style={{ width: "18rem" }}
      >
        <img
          className="card-image-top"
          src={props.image}
          alt=""
          style={{ borderTopRightRadius: "5px", borderTopLeftRadius: "5px" }}
        />

        <div className="card-body d-flex flex-column ">
          <h2 className="card-title">{props.titulo}</h2>
          <p className="card-text">{props.text}</p>
          {props.children}
        </div>
      </article>
    </div>
  );
}
