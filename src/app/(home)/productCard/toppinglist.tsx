"use client";
import ToppingCard, { Topping } from "./toppingcard";
import { useState } from "react";

const toppings:Topping[] = [
  {
    id: "1",
    name: "Chicken",
    image: "/chicken.png",
    price: "50",
    isAvalable: true,
  },
  {
    id: "2",
    name: "Jelapeno",
    image: "/jelapeno.png",
    price: "50",
    isAvalable: true,
  },
  {
    id: "3",
    name: "Cheeze",
    image: "/cheese.png",
    price: "50",
    isAvalable: true,
  },
];

const Toppinglist = () => {
  const [selecttopping, setselecttopping] = useState([toppings[0]]);

  const handleCheckbox = (topping: Topping) => {
    const AlreadyExists = selecttopping.some((element) => element.id === topping.id);

    if(AlreadyExists){
      setselecttopping((prev) => prev.filter((elm) => elm.id === topping.id))

      return
    }

    setselecttopping((prev) => [...prev, topping]); 
  };

  return (
    <section className="mt-4">
      <h3>Extra topping</h3>
      <div className="grid grid-cols-3 mt-4 gap-4">
        {toppings.map((topping) => {
          return <ToppingCard
           topping={topping}
            key={topping.id}
             selecttopping={selecttopping}
             handleCheckbox={handleCheckbox} />;
        })}
      </div>
    </section>
  );
};

export default Toppinglist;
