import Products from "@/app/(pages)/shop/(components)/products.jsx";

import overview from "@/app/(pages)/shop/totalstationen/overview.json";

export const metadata = {
    title: "Totalstationen",
};

export default function Page() {
    return <Products overview={overview} />;
}
