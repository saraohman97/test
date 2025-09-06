// import getWines from "@/actions/getWines";
import Form from "@/components/formpage";
// import WinesPage from "./(components)/client";

export default async function Home() {
  // const wines = await getWines()

  return (
    <div className="p-20">
      {/* <WinesPage wines={wines} /> */}
      <br /> <br />
      <Form />
    </div>
  );
}
