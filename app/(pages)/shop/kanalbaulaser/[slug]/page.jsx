import fs from "fs";

import Product from "@/app/(pages)/shop/(components)/product.jsx";

import { notFound } from "next/navigation";

function getProduct(name) {
    const folder = "kanalbaulaser";
    const file = `app/(pages)/shop/${folder}/(products)/${name}.json`;
    const product = JSON.parse(fs.readFileSync(file, "utf-8"));

    return product;
}

export function generateMetadata(props) {
    const product = getProduct(props.params.slug);

    if (!product) notFound();

    return { title: product.name };
}

export default function Page(props) {
    const product = getProduct(props.params.slug);

    if (!product) notFound();

    return <Product product={product} />;
}
