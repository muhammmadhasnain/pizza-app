"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { CircleCheck } from "lucide-react"

export type Topping = {
     id: string,
     name:string,
     image: string,
     price: string,
     isAvalable: boolean

}

type proptype = {
    topping:Topping,
    selecttopping: Topping[],
    handleCheckbox: (topping:Topping) => void

}
const ToppingCard = ({topping , selecttopping , handleCheckbox}:proptype) => {
    

    const iscurrentselect = selecttopping.some((element) => element.id === topping.id)

    return (
        <Button
        onClick={() => handleCheckbox(topping)}
         variant={"outline"} className={cn('flex flex-col h-40 relative', iscurrentselect ? "border-primary border-2" : '')}>
            <Image alt={topping.name} src={topping.image} width={80} height={80} ></Image>
            <h1>{topping.name}</h1>
            <p>&#8377;{topping.price}</p>
            {
            iscurrentselect && <CircleCheck className="absolute top-1 right-1 text-primary" />
            }
        </Button>
    )
}



export default ToppingCard