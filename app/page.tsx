import dynamic from 'next/dynamic';
// import Benifits from './Components/UI/Benifits';
import Carausel from './Components/carausel';
import Brands from './Components/Brands';
import SpecialSell from "./Components/special_sales";
import CategorySection from './Components/category';
import SpecialOffers from './Components/specialOffer';
import { IProduct } from './types/typed';
const Benifits = dynamic(() => import("./Components/UI/Benifits"), { ssr: false });

const getData = async () => {
  let data = await fetch("http://localhost:5000/api/get-discount-products");
  return await data.json();
};
const getNewestData = async () => {
  let data = await fetch("http://localhost:5000/api/get-newest-products");
  return await data.json();
};
export default async function Home() {
  let data: IProduct[] = await getData();

  let newestData = await getNewestData();
  return (
    <main className="width-[100vw]">
      <Carausel />
      <Benifits />
      <SpecialOffers products={data} />
      {/*<NewItemsSection products={newestData} /> */}
      <CategorySection />
      <SpecialSell />
      <Brands />

    </main>
  );
}
