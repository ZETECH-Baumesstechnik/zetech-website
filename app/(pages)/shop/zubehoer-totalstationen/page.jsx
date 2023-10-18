import Products from "@/app/(pages)/shop/(components)/products.jsx";

import overview from "@/app/(pages)/shop/zubehoer-totalstationen/overview.json";

export const metadata = {
    title: "Zubehör Totalstationen",
};

export default function Page() {
    return <Products overview={overview} />;
}
