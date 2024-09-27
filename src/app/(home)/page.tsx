
import {Button} from "@/components/ui/button"
import { Tabs, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import { TabsList } from "@radix-ui/react-tabs";
import Image from "next/image";
import ProductCard, { Product } from "./productCard/productcard";

const products: Product[] = [
  {
    id: "1",
    name: "Margarita pizza",
    description: "This is very tasty pizza",
    image: "/pizza-main.png",
    price: 500

  },
  {
    id: "2",
    name: "Margarita pizza",
    description: "This is very tasty pizza",
    image: "/pizza-main.png",
    price: 500

  },
  {
    id: "3",
    name: "Margarita pizza",
    description: "This is very tasty pizza",
    image: "/pizza-main.png",
    price: 500

  },
  {
    id: "4",
    name: "Margarita pizza",
    description: "This is very tasty pizza",
    image: "/pizza-main.png",
    price: 500

  },
  {
    id: "5",
    name: "Margarita pizza",
    description: "This is very tasty pizza",
    image: "/pizza-main.png",
    price: 500

  },
  {
    id: "6",
    name: "Margarita pizza",
    description: "This is very tasty pizza",
    image: "/pizza-main.png",
    price: 500

  }
]

export default function Home() {
  return (
    <>
      <section className="bg-white">
        <div className="container flex items-center justify-between py-24" >
          <div >
            <h1 className="text-7xl text-black font-bold font-sans leading-2" >Super Delicious Pizza in
               <br />
            <span className="text-primary">Only 45 Mintes!</span></h1>
            <p className="text-2xl mt-8 max-w-lg leading-sung">Enjoy your free meal if your Order Takes More Than 45 Mintes!</p>
            <Button className="mt-5 rounded-full p-7 text-lg py-7 px-6 font-bold">Get your pizza now</Button>
          </div>
          <div>
            <Image alt="Pizza image" src={"/pizza-main.png"} width={400} height={400}></Image>
          </div>
        </div>
      </section>

      <section>

        <div className="container py-12">
        <Tabs defaultValue="pizza">
  <TabsList>
    <TabsTrigger value="pizza" className="text-md">Pizza</TabsTrigger>
    <TabsTrigger value="beverages" className="text-md">Beverages</TabsTrigger>
  </TabsList>
  <TabsContent value="pizza">
    <div className="grid grid-cols-4 gap-6 mt-6">
      {products.map((product) => <ProductCard product={product} key={product.id} />)}</div>
  </TabsContent>
  <TabsContent value="beverages">
     <div className="grid grid-cols-4 gap-6 mt-6">
      {products.map((product) => <ProductCard product={product} key={product.id} />)}</div>
  </TabsContent>
</Tabs>

        </div>
      </section>

    </>
  );
}
