import "@/components/footer.scss";

import Link from "next/link";

import { BiLogoInstagramAlt } from "react-icons/bi";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { BsEnvelopeFill } from "react-icons/bs";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="flex-grid">
                    <div className="boxes-flex-grid">
                        <nav className="flex-group">
                            <div className="align-box">
                                <p className="group-header">Links</p>
                                <div className="sub-flex-group">
                                    <Link href={"/"} className="group-text link">
                                        Home
                                    </Link>
                                    <Link href={"/dienstleistungen"} className="group-text link">
                                        Dienstleistungen
                                    </Link>
                                    <Link href={"/service"} className="group-text link">
                                        Service
                                    </Link>
                                    <Link href={"/shop"} className="group-text link">
                                        Shop
                                    </Link>
                                    <Link href={"/downloads"} className="group-text link">
                                        Downloads
                                    </Link>
                                    <Link href={"/kontakt"} className="group-text link">
                                        Kontakt
                                    </Link>
                                </div>
                            </div>
                        </nav>
                        <div className="flex-group">
                            <div className="align-box">
                                <p className="group-header">Öffnungszeiten</p>
                                <div className="sub-flex-group">
                                    <p className="group-text">Montag {"-"} Freitag</p>
                                    <p className="group-text">07.30 Uhr {"-"} 12.00 Uhr</p>
                                    <p className="group-text">13.00 Uhr {"-"} 17.00 Uhr</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex-group">
                            <div className="align-box">
                                <p className="group-header">Kontaktdaten</p>
                                <div className="sub-flex-group">
                                    <p className="group-text">Luzernerstrasse 88A</p>
                                    <p className="group-text">6014 Luzern</p>
                                    <Link href={"/kontakt"} className="group-text link">
                                        +41 41 250 32 02
                                    </Link>
                                    <Link href={"/kontakt"} className="group-text link">
                                        info@zetech.ch
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <nav className="flex-group">
                            <div className="align-box">
                                <p className="group-header">Soziales</p>
                                <div className="sub-flex-group">
                                    <Link href={"/kontakt"} className="holder link">
                                        <div className="icon-holder">
                                            <BiLogoInstagramAlt className="icon" />
                                        </div>
                                        <p className="group-text">Instagram</p>
                                    </Link>
                                    <Link href={"/kontakt"} className="holder link">
                                        <div className="icon-holder">
                                            <BiLogoFacebookCircle className="icon" />
                                        </div>
                                        <p className="group-text">Facebook</p>
                                    </Link>
                                    <Link href={"/kontakt"} className="holder link">
                                        <div className="icon-holder">
                                            <BsEnvelopeFill className="icon" />
                                        </div>
                                        <p className="group-text">E-Mail</p>
                                    </Link>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    );
}
