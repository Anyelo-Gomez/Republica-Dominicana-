import "bootstrap/dist/css/bootstrap.css";
import { CardLugar } from "../components/CardLugar";
import { Categoria } from "../components/categorias";
import { ButtonLugar } from "../components/ButtonLugares";
import NavSearch from "../components/NavSearch";

async function getProducts(tipo: string | string[] | undefined) {
  let res;

  if (tipo) {
    res = await fetch(`${process.env.DB_HOST}lugares?tipo=${tipo}`);
  } else {
    res = await fetch(`${process.env.DB_HOST}lugares`);
  }
  return res.json();
}

export default async function Lugares({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const products = await getProducts(searchParams.tipo);
  type Props = {
    id: number;
    name: string;
    text: string;
    image: string;
    lugar: string;
  };

  const lugares = () => {
    return products.map((item: Props) => (
      <CardLugar
        key={item.id}
        image={`/img/lugares/${item.image}.png`}
        name={`${item.name}`}
        text={item.text}
        lugar={item.lugar}
      >
        <ButtonLugar
          name={"Ver Mas"}
          className="w-50"
          route={`lugares/${item.id}`}
        />
      </CardLugar>
    ));
  };

  return (
    <main className="">
      <NavSearch></NavSearch>

      <Categoria>
        <h2>{`Lugares (${products.length})`}</h2>

        {lugares()}
      </Categoria>
    </main>
  );
}
