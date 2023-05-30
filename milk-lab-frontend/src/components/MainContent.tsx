import { useState, useEffect } from "react";
import { Milk, fetchAllMilks } from "@/apicalls/milkfetcher";

export default function MainContent() {
    const [milks, setMilks] = useState<Milk[]>([]);
}