import Products from "@/app/(pages)/shop/(components)/products.jsx";

import overview from "@/app/(pages)/shop/empfaenger/overview.json";

export const metadata = {
    title: "Empfänger",
};

export default function Page() {
    return <Products overview={overview} />;
}
