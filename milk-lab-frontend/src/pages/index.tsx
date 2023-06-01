import React, { useState, useEffect } from "react";
import { Checkbox, Dropdown, Label } from "flowbite-react";
import { Milk, fetchAllMilks } from "@/apicalls/milkfetcher";
import MilkCard from "@/components/MilkCard";

function getTypes(milks: Milk[]) {
  return Array.from(new Set(milks.map(milk => milk.type)));
}

function handleDropdown(event: React.ChangeEvent<HTMLInputElement>, milkType: string,
  selectedTypes: string[], setSelectedTypes: React.Dispatch<React.SetStateAction<string[]>>) {
  if(event.target.checked) {
    setSelectedTypes(selectedTypes => [...selectedTypes, milkType]);
  } else {
    setSelectedTypes(selectedTypes.filter(selectedType => selectedType != milkType));
  }
}

function milkFiltering(milks: Milk[], selectedTypes: string[], searchTerm: string) {
  return milks.filter(milk => {
    if(selectedTypes.length === 0) {
      return true;
    } else {
      return selectedTypes.includes(milk.type);
    }
  }).filter(milk => {
    if(searchTerm.length === 0) {
      return true;
    } else {
      return milk.name.includes(searchTerm);
    }
  });
}

export default function Home() {
  const [milks, setMilks] = useState<Milk[]>([]);
  const [prodAmount, setProdAmount] = useState<number>(0);

  useEffect(() => {
    fetchAllMilks(setMilks, setProdAmount);
  }, []);

  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  return (
    <main>
      <header className="flex justify-center items-center h-24">
        <p className="font-bold text-3xl text-pink-300">The Milk Store</p>
      </header>
      <div className="flex flex-wrap justify-center bg-rose-100">
        <div className="basis-3/5 flex flex-wrap justify-between my-8">
          <form>
            <input type="search" className="" placeholder="Search" onChange={e => setSearchTerm(e.target.value)} />
          </form>
          <Dropdown label="Filter">
            {getTypes(milks).map(milkType => {
              return (
                <Dropdown.Item>
                  <div className="flex items-center gap-2">
                    <Checkbox id={milkType} onChange={(e) => {
                      handleDropdown(e, milkType, selectedTypes, setSelectedTypes);
                    }} />
                    <Label htmlFor={milkType}>{milkType}</Label>
                  </div>
                </Dropdown.Item>
              )
            })}
          </Dropdown>
        </div>
        <p className="basis-3/5 text-2xl mx-1">{prodAmount} results</p>
        <div className="basis-3/5 flex flex-wrap justify-between">
          {milkFiltering(milks, selectedTypes, searchTerm).map(milk => {
            return <MilkCard milk={milk} />
          })}
        </div>
      </div>
    </main>
  )
}
