"use client";

import categoriesData from "@/app/(pages)/shop/categories.json";

import Link from "next/link";

import { usePathname } from "next/navigation";

export default function Navigation() {
    const path = usePathname();

    return (
        <div className="nav-box">
            <h2 className="title">Katalog</h2>
            <nav className="navigation">
                <Link href={"/shop"} className={path === "/shop" ? "link active" : "link"} key={-1}>
                    {categoriesData.category}
                </Link>
                {categoriesData.products.map((product, index) => (
                    <Link href={product.link} className={path.includes(product.link) ? "link active" : "link"} key={index}>
                        {product.name}
                    </Link>
                ))}
            </nav>
        </div>
    );
}
