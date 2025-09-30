import { CardColumn } from "../components/categorias";

export default function News() {
  return (
    <main className="container my-4">
      <section>
        <article className="row">
          <CardColumn
            image="/img/eventos/opux.png"
            titulo="Opux Night Club"
            text="29-9-2025"
          />
        </article>
      </section>
    </main>
  );
}
