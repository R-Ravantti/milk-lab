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

type MilkPurchaseDTO = {
    id: string,
    amount: number
}

const BASE_PATH = 'http://localhost:8080/api/milk';

export async function fetchAllMilks(setMilks: Dispatch<SetStateAction<Milk[]>>) {
    const response = await fetch(BASE_PATH);
    const responseJSON: MilkListDTO = await response.json();
    setMilks(responseJSON.results);
}

export async function purchaseMilk(milkId: string, milkAmount: number, setMilks: Dispatch<SetStateAction<Milk[]>>) {
    if(milkAmount <= 0) {
        return;
    }
    const reqBody: MilkPurchaseDTO = {id: milkId, amount: milkAmount};
    const reqOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(reqBody)
    };
    const response = await fetch(`${BASE_PATH}/${milkId}`, reqOptions);
    if(response.ok) {
        await fetchAllMilks(setMilks);
    }
}