type Props = {
  className?: string;
  text?: string;
  titulo?: string;
  image: string;
};

export function Portada(props: Props) {
  return (
    <div className="container-fluid " style={{ height: "500px" }}>
      <div className="row row-fixed h-100">
        <div
          className={`col-12 col-md-4  d-flex flex-column justify-content-center ${props.className}`}
        >
          <h2>{props.titulo}</h2>
          <p>{props.text}</p>
        </div>
        <div className="col-12 col-md-8 px-0 h-100">
          <img
            className="w-100 h-100 object-fit-cover"
            src={props.image}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
