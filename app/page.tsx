import Form from "@/components/formpage";
import prismadb from "@/lib/prismadb";

export default async function Home() {
  const wines = await prismadb.wine.findMany()
  console.log(wines)

  return (
    <div className="p-20">
      {wines.length ? (
        wines?.map((wine) => <div key={wine.id}>{wine.name}</div>)
      ) : (
        <div>Inga viner</div>
      )}{" "}
      <br /> <br />
      <Form />
    </div>
  );
}
