import Products from "@/app/(pages)/shop/(components)/products.jsx";

import overview from "@/app/(pages)/shop/tablets/overview.json";

export const metadata = {
    title: "Tablets",
};

export default function Page() {
    return <Products overview={overview} />;
}
