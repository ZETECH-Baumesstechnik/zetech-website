import Products from "@/app/(pages)/shop/(components)/products.jsx";

import overview from "@/app/(pages)/shop/baulaser/overview.json";

export const metadata = {
    title: "Baulaser",
};

export default function Page() {
    return <Products overview={overview} />;
}
