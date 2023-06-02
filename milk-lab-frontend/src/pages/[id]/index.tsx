import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Milk, fetchMilk, purchaseMilk } from "@/apicalls/milkfetcher";
import MilkCard from "@/components/MilkCard";
import { ParsedUrlQuery } from "querystring";

export default function MilkContent() {
    const router = useRouter();
    const { id } = router.query as ParsedUrlQuery & { id: string };
    const [milk, setMilk] = useState<Milk>({ name: "", type: "", storage: 0, id: "" });
    const [purchase, setPurchase] = useState<number>(1);
    useEffect(() => {
        if (id) {
            fetchMilk(id, setMilk);
        }
    }, [id]);

    return (
        <main>
            <div className="flex flex-col content-start h-screen">
                <header className="flex justify-center items-center h-24 w-full">
                    <p className="font-bold text-3xl text-pink-300">The Milk Store</p>
                </header>
                <div className="flex justify-center items-end bg-rose-100 h-12 w-full">
                    <a href="/" className="text-2xl text-blue-300">{"< Back"}</a>
                </div>
                <div className="flex flex-wrap justify-center content-center bg-rose-100 w-full grow">
                    <div className="w-3/5 flex justify-left">
                        <MilkCard milk={milk} />
                        <div className="w-1/3 mx-4 my-8">
                            <form onSubmit={(e) => {
                                e.preventDefault();
                                purchaseMilk(milk.id, purchase, setMilk);
                            }}>
                                <label htmlFor="purchaseRange" className="block">{purchase}</label>
                                <input id="purchaseRange" type="range" className="h-2 w-full bg-gray-200 appearance-none cursor-pointer"
                                    min={1} max={milk.storage} onChange={(e) => { setPurchase(Number(e.target.value)); }} />
                                <button type="submit">Purchase</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}