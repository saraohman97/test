import getWines from "@/actions/getWines";
import Form from "@/components/formpage";

export default async function Home() {
  const wines = await getWines()

  return (
    <div className="p-20">
      {wines.length ? (
        wines?.map((wine) => <div key={wine.id}>{wine.name}</div>)
      ) : (
        <div>Inga viner</div>
      )}
      <br /> <br />
      <Form />
    </div>
  );
}
