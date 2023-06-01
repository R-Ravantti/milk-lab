import React from "react";
import { Milk } from "@/apicalls/milkfetcher";

type MilkCardProps = {
    milk: Milk
}

export default function MilkCard(props: MilkCardProps) {
    const { milk } = props;
    return (
        <a className="w-80 rounded overflow-hidden shadow-lg my-8 bg-white" href={"/" + milk.id}>
            <img className="w-full bg-fuchsia-100" src="/milk.png"></img>
            <p className="font-bold text-l m-1 break-normal">{milk.name}</p>
            <div className="flex justify-between">
                <p className="m-1 text-gray-400">{milk.type}</p>
                <p className="m-1 text-lime-700">{milk.storage} liter</p>
            </div>
        </a>
    )
}