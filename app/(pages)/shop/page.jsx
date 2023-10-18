import Products from "@/app/(pages)/shop/(components)/products.jsx";

import overview from "@/app/(pages)/shop/overview.json";

export const metadata = {
    title: "Shop",
};

export default function Page() {
    return <Products overview={overview} />;
}
