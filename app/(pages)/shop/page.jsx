import Products from "@/app/(pages)/shop/(components)/products.jsx";

import categoriesData from "@/app/(pages)/shop/categories.json";

export const metadata = {
    title: "Shop",
};

export default function Page() {
    return <Products data={categoriesData} />;
}
