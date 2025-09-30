import "bootstrap/dist/css/bootstrap.css";
import { Categoria, CardColumn } from "../components/categorias";
import path from "path";
import fs from "fs";

export default function Lugares() {
  const lugares = () => {
    const dir = path.join(process.cwd(), "/public/img/lugares");
    const file = fs.readdirSync(dir);

    return file.map((item, index) => (
      <CardColumn
        key={index}
        titleButton="ver mas"
        image={`img/lugares/${item}`}
        titulo={item.replace(".png", " ")}
      />
    ));
  };

  return (
    <main>
      <Categoria>{lugares()}</Categoria>
    </main>
  );
}
