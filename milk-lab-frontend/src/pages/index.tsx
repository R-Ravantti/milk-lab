import React, { useState, useEffect } from "react";
import { Milk, fetchAllMilks } from "@/apicalls/milkfetcher";
import MilkCard from "@/components/MilkCard";

function getTypes(milks: Milk[]) {
  return Array.from(new Set(milks.map(milk => milk.type)));
}

export default function Home() {
  const [milks, setMilks] = useState<Milk[]>([]);

  useEffect(() => {
    fetchAllMilks(setMilks);
  }, []);
  return (
    <main>
      <header>

      </header>
      <div className="flex flex-wrap justify-center">
        {milks.map(milk => {
          return <MilkCard milk={milk} />
        })}
      </div>
    </main>
  )
}
