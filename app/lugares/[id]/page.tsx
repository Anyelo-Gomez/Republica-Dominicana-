async function getLugar(id: string) {
  const res = await fetch(`${process.env.DB_HOST}lugares?id=${id}`);
  return res.json();
}

export default async function LugarDetail({
  params,
}: {
  params: { id: string };
}) {
  const lugar = await getLugar(params.id);

  return (
    <main className="container  my-5 py-5">
      <section className="container  pb-5" style={{ height: "600px" }}>
        <div className="row h-100 border lugarDeatial">
          <div className="col-12 col-md-6 h-100 px-0">
            <img
              src={`/img/lugares/${lugar[0].image}.png`}
              className=" w-100 h-100 object-fit-cover"
              alt="imagen del lugar"
            />
          </div>
          <div className="col-12 col-md-6 h-100">
            <h2>{lugar[0].name}</h2>
            <h5>{lugar[0].lugar}</h5>
            <p>{lugar[0].text}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
