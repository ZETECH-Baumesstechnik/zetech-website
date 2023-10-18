import Link from "next/link";

import { FaFilePdf } from "react-icons/fa";

export default function Product(props) {
    return (
        <div className="product-box">
            <h2 className="title">{props.product.name}</h2>
            <div className="gallery">
                <div className="big-image-holder">
                    <img src={props.product.image} alt={props.product.name} loading="lazy" className="image" />
                </div>
            </div>
            <div className="info-container">
                <div className="description">
                    <h2 className="headline">{props.product.descriptions_title}</h2>
                    <ul className="subliner-list">
                        {props.product.descriptions?.map((description, index) => (
                            <li className="list-item" key={index}>
                                {description.bullet ? <span className="point">{"•"}</span> : null}
                                {description.description}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="datasheet-list">
                    <div className="documents-box">
                        <h2 className="datasheet-title">{props.product.datasheets_title}</h2>
                        {props.product.datasheets?.map((datasheet, index) => (
                            <Link href={datasheet.datasheet} target="_blank" className="datasheet-link" key={index}>
                                <FaFilePdf className="icon" />
                                <span className="type">{datasheet.description}</span>
                            </Link>
                        ))}
                    </div>
                    <div className="link-box">
                        <Link href={"/kontakt"} className="link">
                            Kontakt aufnehmen
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
