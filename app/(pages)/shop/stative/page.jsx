import Products from "@/app/(pages)/shop/(components)/products.jsx";

import productsData from "./products.json";

export const metadata = {
    title: productsData.category,
};

export default function Page() {
    return <Products data={productsData} />;
}
