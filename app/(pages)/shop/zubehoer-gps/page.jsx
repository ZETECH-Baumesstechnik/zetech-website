import Products from "@/app/(pages)/shop/(components)/products.jsx";

import overview from "@/app/(pages)/shop/zubehoer-gps/overview.json";

export const metadata = {
    title: "Zubehör GPS",
};

export default function Page() {
    return <Products overview={overview} />;
}
