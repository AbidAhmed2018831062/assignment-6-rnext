import Image from "next/image";
import Banner from "./components/HomePage/Banner";
import ShowProducts from "./components/HomePage/ShowProducts";
import Newsletter from "./components/HomePage/Newsletter";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Banner/>
      <ShowProducts/>
      <Newsletter/>
    </main>
  );
}
