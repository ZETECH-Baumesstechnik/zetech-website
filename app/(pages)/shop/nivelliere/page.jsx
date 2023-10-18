import Products from "@/app/(pages)/shop/(components)/products.jsx";

import overview from "@/app/(pages)/shop/nivelliere/overview.json";

export const metadata = {
    title: "Nivelliere",
};

export default function Page() {
    return <Products overview={overview} />;
}
