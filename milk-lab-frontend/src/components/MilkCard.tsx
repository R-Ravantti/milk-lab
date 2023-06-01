import React from "react";
import { Milk } from "@/apicalls/milkfetcher";

type MilkCardProps = {
    milk: Milk
}

export default function MilkCard(props: MilkCardProps) {
    const { milk } = props;
    return (
        <a className="w-72 rounded overflow-hidden shadow-lg mx-10 my-8" href={"/" + milk.id}>
            <img className="w-full" src="/milk.png"></img>
            <p className="font-bold text-l m-1 break-normal">{milk.name}</p>
            <div className="flex justify-between">
                <p className="m-1 text-gray-400">{milk.type}</p>
                <p className="m-1 text-lime-700">{milk.storage} liter</p>
            </div>
        </a>
    )
}