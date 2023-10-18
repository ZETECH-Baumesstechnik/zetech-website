import Products from "@/app/(pages)/shop/(components)/products.jsx";

import overview from "@/app/(pages)/shop/stative/overview.json";

export const metadata = {
    title: "Stative",
};

export default function Page() {
    return <Products overview={overview} />;
}
