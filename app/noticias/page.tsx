export default function News() {
  return (
    <main className="container my-5">
      {/* principal */}
      <section>
        <article className="row bg-secondary border ">
          <div className="col-12 col-md-6 px-0 h-100">
            <img
              src="/img/noticias/lluvia.png"
              style={{
                width: "100%",
                objectFit: "cover",
                maxHeight: "300px",
                overflow: "hidden",
              }}
              alt=""
            />
          </div>
          <div className="col-12 col-md-6 d-flex flex-column justify-content-center text-white">
            <p>La República </p>
            <h2>
              COE reporta una persona fallecida y 5,620 desplazadas por las
              lluvias
            </h2>
            <p>
              El Centro de Operaciones de Emergencia (COE) reportó una persona
              fallecida por las lluvias y 5,620 personas desplazadas, de las que
              26 están en un albergue.
            </p>
          </div>
        </article>
      </section>
      <section className="mt-2">
        <div className="row">
          <article className="col-6 col-md-4 border py-2">
            <div className="card border-0">
              <img className="card-image" src="img/noticias/COE.png" alt="" />
              <div className="card-body">
                <p>La República</p>
                <h2 className="card-title fs-4">
                  COE: Más de 491,000 personas sin agua y 5,615 desplazadas por
                  las lluvias
                </h2>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
