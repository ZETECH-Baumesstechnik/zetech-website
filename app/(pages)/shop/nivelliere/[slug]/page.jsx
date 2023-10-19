import Product from "@/app/(pages)/shop/(components)/product.jsx";

import productsData from "../products.json";

import { notFound } from "next/navigation";

export function generateMetadata(props) {
    const product = productsData.products.find((product) => product.link.includes(props.params.slug));

    if (!product) notFound();

    return { title: product.name };
}

export default function Page(props) {
    const product = productsData.products.find((product) => product.link.includes(props.params.slug));

    if (!product) notFound();

    return <Product product={product} />;
}
