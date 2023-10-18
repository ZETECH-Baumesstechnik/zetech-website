import Products from "@/app/(pages)/shop/(components)/products.jsx";

import overview from "@/app/(pages)/shop/gps/overview.json";

export const metadata = {
    title: "GPS",
};

export default function Page() {
    return <Products overview={overview} />;
}
