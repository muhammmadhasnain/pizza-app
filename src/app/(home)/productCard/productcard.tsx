

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import Toppinglist from "./toppinglist";
import { ShoppingCart } from "lucide-react";

export type Product = {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
};

type proptypes = { product: Product };

const ProductCard = ({ product }: proptypes) => {
  return (
    <Card className="border-none rounded-xl">
      <CardHeader className="flex items-center justify-center">
        <Image
          alt="pizza-image"
          width={150}
          height={150}
          src={product.image}
        ></Image>
      </CardHeader>
      <CardContent>
        <h1 className="text-xl font-bold">{product.name}</h1>
        <p className="mt-2">{product.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <p>
          <span>From</span>
          <span className="font-bold"> Rs {product.price}</span>
        </p>

        <Dialog>
          <DialogTrigger className="bg-orange-200 hover:bg-orange-300 text-orange-600 px-6 py-2 rounded-full shadow-md hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150">
            Choose
          </DialogTrigger>
          <DialogContent className="max-w-3xl p-0">
            <div className="flex ">
              <div className="w-1/3 bg-white rounded p-8 flex items-center justify-center">
                <Image
                  alt={product.name}
                  src={product.image}
                  width={450}
                  height={450}
                ></Image>
              </div>
              <div className="w-2/3 p-8">
                <h3 className="text-xl font-bold">{product.name}</h3>
                <p className="mt-2">{product.description}</p>

                <div>
                  <h4 className="mt-6">Choose the size</h4>
                  <RadioGroup
                    defaultValue="small"
                    className="grid grid-cols-3 gap-4 mt-2"
                  >
                    <div>
                      <RadioGroupItem
                        value="small"
                        id="small"
                        className="peer sr-only"
                        aria-label="Small"
                      />
                      <Label
                        htmlFor="small"
                        className="flex flex-col items-center justify-between rounded-md border-2 bg-white p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                      >
                        Small
                      </Label>
                    </div>

                    <div>
                      <RadioGroupItem
                        value="medium"
                        id="medium"
                        className="peer sr-only"
                        aria-label="Medium"
                      />
                      <Label
                        htmlFor="medium"
                        className="flex flex-col items-center justify-between rounded-md border-2 bg-white p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                      >
                        Medium
                      </Label>
                    </div>

                    <div>
                      <RadioGroupItem
                        value="large"
                        id="large"
                        className="peer sr-only"
                        aria-label="Large"
                      />
                      <Label
                        htmlFor="large"
                        className="flex flex-col items-center justify-between rounded-md border-2 bg-white p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                      >
                        Large
                      </Label>
                    </div>
                  </RadioGroup>
                </div>


                <div>
                  <h4 className="mt-6">Choose the thin</h4>
                  <RadioGroup
                    defaultValue="thin"
                    className="grid grid-cols-3 gap-4 mt-2"
                  >
                    <div>
                      <RadioGroupItem
                        value="thin"
                        id="thin"
                        className="peer sr-only"
                        aria-label="Thin"
                      />
                      <Label
                        htmlFor="thin"
                        className="flex flex-col items-center justify-between rounded-md border-2 bg-white p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                      >
                        Thin
                      </Label>
                    </div>

                    <div>
                      <RadioGroupItem
                        value="thick"
                        id="thick"
                        className="peer sr-only"
                        aria-label="Thick"
                      />
                      <Label
                        htmlFor="thick"
                        className="flex flex-col items-center justify-between rounded-md border-2 bg-white p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                      >
                        Thick
                      </Label>
                    </div>

                   
                  </RadioGroup>
                </div>

                <Toppinglist />

                <div className="flex items-center justify-between mt-8">
                  <span className="font-bold text-xl">&#8377; 400</span>

                  <Button>
                  <ShoppingCart size={20}/>
                  <span className="ml-2 text-xl">Add to Cart</span>
                  </Button>
                </div>
             
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
