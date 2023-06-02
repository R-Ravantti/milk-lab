import React from "react";
import { Milk } from "@/apicalls/milkfetcher";
import Image from "next/image";
import Link from "next/link";

type MilkCardProps = {
    milk: Milk
}

export default function MilkCard(props: MilkCardProps) {
    const { milk } = props;
    return (
        <Link className="w-80 rounded overflow-hidden shadow-lg my-8 bg-white" href={"/" + milk.id}>
            <Image className="w-full bg-fuchsia-100" src="/milk.png" alt="A small cartoon image of a milk carton with dot eyes and a smile."></Image>
            <p className="font-bold text-l m-1 break-normal">{milk.name}</p>
            <div className="flex justify-between">
                <p className="m-1 text-gray-400">{milk.type}</p>
                <p className="m-1 text-lime-700">{milk.storage} liter</p>
            </div>
        </Link>
    )
}