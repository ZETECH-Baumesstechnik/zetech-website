import Products from "@/app/(pages)/shop/(components)/products.jsx";

import overview from "@/app/(pages)/shop/distanzmessgeraete/overview.json";

export const metadata = {
    title: "Distanzmessgeräte",
};

export default function Page() {
    return <Products overview={overview} />;
}
