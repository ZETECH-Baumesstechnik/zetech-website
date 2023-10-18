import Products from "@/app/(pages)/shop/(components)/products.jsx";

import overview from "@/app/(pages)/shop/kanalbaulaser/overview.json";

export const metadata = {
    title: "Kanalbaulaser",
};

export default function Page() {
    return <Products overview={overview} />;
}
