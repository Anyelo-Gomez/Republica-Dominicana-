import { ReactNode } from "react";

type Props = {
  image: string;
  name: string;
  text?: string;
  lugar?: string;
  children?: ReactNode;
};

export function CardLugar(props: Props) {
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
          style={{
            borderTopRightRadius: "5px",
            borderTopLeftRadius: "5px",
            width: "100%",
            height: "200px",
          }}
        />

        <div className="card-body d-flex flex-column ">
          <h2 className="card-title ">{props.name}</h2>
          <h3 className="card-text fs-5">{props.lugar}</h3>
          <p className="card-text">{props.text}</p>
          {props.children}
        </div>
      </article>
    </div>
  );
}
