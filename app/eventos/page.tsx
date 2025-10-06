import { CardCategoria, Categoria } from "../components/categorias";

export default function News() {
  return (
    <main className="container my-4">
      <Categoria>
        <CardCategoria
          image="/img/eventos/opux.png"
          titulo="Opux Night Club"
          text="29-9-2025"
        />
      </Categoria>
    </main>
  );
}
