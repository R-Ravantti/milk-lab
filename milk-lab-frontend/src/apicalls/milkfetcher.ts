import { Dispatch, SetStateAction } from "react";

export type Milk = {
    name: string,
    type: string,
    storage: number,
    id: string
}

type MilkListDTO = {
    count: number,
    results: Milk[]
}

const BASE_PATH = 'http://localhost:8080/api/milk';

export async function fetchAllMilks(setMilks: Dispatch<SetStateAction<Milk[]>>) {
    const response = await fetch(BASE_PATH);
    const responseJSON: MilkListDTO = await response.json();
    setMilks(responseJSON.results);
}