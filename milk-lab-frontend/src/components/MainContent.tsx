import { useState, useEffect } from "react";
import { Milk, fetchAllMilks } from "@/apicalls/milkfetcher";
import MilkCard from "./MilkCard";

export default function MainContent() {
    const [milks, setMilks] = useState<Milk[]>([]);

    useEffect(() => {
        fetchAllMilks(setMilks);
    }, []);

    return (
        <div>
            {milks.map(milk => {
                return <MilkCard milk={milk}/>
            })}
        </div>
    )
}