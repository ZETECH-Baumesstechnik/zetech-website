import Products from "@/app/(pages)/shop/(components)/products.jsx";

import overview from "@/app/(pages)/shop/linienlaser/overview.json";

export const metadata = {
    title: "Linienlaser",
};

export default function Page() {
    return <Products overview={overview} />;
}
