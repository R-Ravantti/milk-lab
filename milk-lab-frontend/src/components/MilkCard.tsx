import Link from "next/link";
import { Milk } from "@/apicalls/milkfetcher";

type MilkCardProps = {
    milk: Milk
}

export default function MilkCard(props: MilkCardProps) {
    const {milk} = props;
    return (
        <div>
            <p>{milk.name}</p>
            <Link href={"/" + milk.id}>Link to milk</Link>
        </div>
    )
}