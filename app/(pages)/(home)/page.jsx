import "@/app/(pages)/(home)/style.scss";

import ScrollContainer from "@/containers/scroll-container.jsx";

import Slider from "@/app/(pages)/(home)/(components)/slider.jsx";

import productsData from "@/app/(pages)/(home)/products.json";

import Link from "next/link";

export const metadata = {
    title: "Home",
};

export default function Page() {
    return (
        <main className="home-page">
            <Slider products={productsData} />

            <section className="hero-section">
                <div className="image-holder">
                    <img src="/images/home/construction-landscape.webp" alt="Hintergrund" loading="lazy" className="banner" />
                </div>
                <div className="section-container">
                    <ScrollContainer classes={"title-box"}>
                        <h1 className="title">
                            IHRE EXPERTEN IN SACHEN
                            <br />
                            <span className="gradient">BAUMESSTECHNIK</span>
                        </h1>
                    </ScrollContainer>
                </div>
            </section>

            <section className="services-section">
                <div className="section-container">
                    <ScrollContainer classes={"title-box"}>
                        <h1 className="title">
                            UNSERE
                            <br />
                            <span className="gradient">FACHGEBIETE</span>
                        </h1>
                    </ScrollContainer>
                    <div className="flex-grid">
                        <ScrollContainer classes={"sub-flex-grid"}>
                            <div className="title-box">
                                <h2 className="title">DIENSTLEISTUNGEN</h2>
                            </div>
                            <div className="text-box">
                                <p className="text">Vor und während der Bauausführung stehen wir Ihnen zur Seite. Von der Bearbeitung Ihrer Pläne und Daten für die Verwendung mit Robotik-Totalstationen, GPS Systemen oder Maschinensteuerungen bis zur Erstellung von 3D oder 2D Modellen und Geländedatenermittlungen.</p>
                                <Link href={"/dienstleistungen"} className="link">
                                    Zur Übersicht
                                </Link>
                            </div>
                            <div className="image-box flex-end">
                                <div className="image-holder">
                                    <iframe src="/documents/dienstleistungen/model.html" referrerPolicy="no-referrer" loading="lazy" title="3D Model" className="frame"></iframe>
                                </div>
                            </div>
                        </ScrollContainer>
                        <ScrollContainer classes={"sub-flex-grid reversed"}>
                            <div className="title-box">
                                <h2 className="title">SERVICE</h2>
                            </div>
                            <div className="text-box">
                                <p className="text">Unsere zertifizierte Service-Werkstatt erledigt für Sie Reparaturen, Kontrollen und Service Arbeiten an Ihren Messinstrumenten. Nebst Tachymeter, Baulaser, Nivellier, etc., sind wir bis zu den High-End Robotik-Totalstationen autorisiert und durch die Leica Geosystems AG zertifiziert, Service Arbeiten, QS-Zertifikate, Kontrollen und Reparaturen durchzuführen.</p>
                                <Link href={"/service"} className="link">
                                    Zum Service
                                </Link>
                            </div>
                            <div className="image-box flex-start">
                                <div className="image-holder"></div>
                            </div>
                        </ScrollContainer>
                        <ScrollContainer classes={"sub-flex-grid"}>
                            <div className="title-box">
                                <h2 className="title">SHOP</h2>
                            </div>
                            <div className="text-box">
                                <p className="text">Mit unseren Bauvermessungsinstrumenten eruieren wir mit Ihnen die bestmögliche und optimale Lösung, damit Ihre Bau- und Fertigungsprozesse schneller, optimiert und mit kleinerem Aufwand ausgeführt werden können. Gerne beraten und stellen wir Ihnen das für Sie optimale Vermessungsgerät vor.</p>
                                <Link href={"/shop"} className="link">
                                    Zum Shop
                                </Link>
                            </div>
                            <div className="image-box flex-end">
                                <div className="image-holder"></div>
                            </div>
                        </ScrollContainer>
                    </div>
                </div>
            </section>

            <section className="about-section">
                <div className="section-container">
                    <div className="flex-grid">
                        <div className="image-box">
                            <div className="image-holder"></div>
                        </div>
                        <ScrollContainer classes={"title-box"}>
                            <h1 className="title">
                                WIR SIND IHR
                                <br />
                                <span className="gradient">STARKER PARTNER</span>
                            </h1>
                        </ScrollContainer>
                        <div className="sub-flex-grid">
                            <ScrollContainer classes={"description-box"}>
                                <h2 className="title">BESCHREIBUNG</h2>
                                <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, illum earum deserunt unde obcaecati enim totam distinctio recusandae praesentium dicta explicabo, eum molestiae rem eveniet, consequatur eos porro natus soluta ab beatae ex vitae. Consequatur, impedit eius explicabo, veritatis modi cupiditate itaque ad doloremque illum natus earum, sunt quia ratione?</p>
                            </ScrollContainer>
                            <ScrollContainer classes={"description-box"}>
                                <h2 className="title">BESCHREIBUNG</h2>
                                <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, illum earum deserunt unde obcaecati enim totam distinctio recusandae praesentium dicta explicabo, eum molestiae rem eveniet, consequatur eos porro natus soluta ab beatae ex vitae. Consequatur, impedit eius explicabo, veritatis modi cupiditate itaque ad doloremque illum natus earum, sunt quia ratione?</p>
                            </ScrollContainer>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact-section">
                <div className="section-container">
                    <div className="flex-grid">
                        <div className="text-box">
                            <h1 className="title">Zögern Sie nicht</h1>
                            <p className="text">und kontaktieren Sie uns bei allen Fragen oder Anliegen.</p>
                        </div>
                        <Link href={"/kontakt"} className="link">
                            Kontakt aufnehmen
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
