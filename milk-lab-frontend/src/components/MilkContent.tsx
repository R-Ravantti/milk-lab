import { useState, useEffect } from "react";
import { useRouter } from "next/router"
import Link from "next/link";
import { Milk, fetchMilk } from "@/apicalls/milkfetcher";
import { ParsedUrlQuery } from "querystring";

export default function MilkContent() {
    const router = useRouter();
    const { milkId } = router.query as ParsedUrlQuery & {milkId : string};
    const [milk, setMilk] = useState<Milk>({name: "", type: "", storage: 0, id: ""});
    useEffect(() => {
        if(milkId) {
            fetchMilk(milkId, setMilk);
        }
    }, [milkId]);
}