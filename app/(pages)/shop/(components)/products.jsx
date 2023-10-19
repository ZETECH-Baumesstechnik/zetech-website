import Link from "next/link";

export default function Products(props) {
    return (
        <div className="products-box">
            <h2 className="title">{props.data.category}</h2>
            <div className="products-grid">
                {props.data.products.map((product, index) => (
                    <div className="product" key={index}>
                        <h2 className="title">{product.name}</h2>
                        <Link href={product.link} className="image-holder">
                            <img src={product.image} alt={product.name} loading="lazy" className="image" />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
