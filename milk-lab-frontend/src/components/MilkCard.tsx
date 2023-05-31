import { Milk } from "@/apicalls/milkfetcher";

type MilkCardProps = {
    milk: Milk
}

export default function MilkCard(props: MilkCardProps) {
    const {milk} = props;
    return (
        <div>
            <p>{milk.name}</p>
        </div>
    )
}