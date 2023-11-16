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
                            Ihre Experten in Sachen
                            <br />
                            <span className="gradient">digitales Bauen und Bauvermessung</span>
                        </h1>
                    </ScrollContainer>
                </div>
            </section>

            <section className="services-section">
                <div className="section-container">
                    <ScrollContainer classes={"title-box"}>
                        <h1 className="title">
                            Unser
                            <br />
                            <span className="gradient">Kerngeschäft</span>
                        </h1>
                    </ScrollContainer>
                    <div className="flex-grid">
                        <ScrollContainer classes={"sub-flex-grid"}>
                            <div className="title-box">
                                <h2 className="title">Dienstleistungen</h2>
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
                                <h2 className="title">Service</h2>
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
                                <h2 className="title">Shop</h2>
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
                                Wir sind Ihr
                                <br />
                                <span className="gradient">starker Partner</span>
                            </h1>
                        </ScrollContainer>
                        <div className="sub-flex-grid">
                            <ScrollContainer classes={"description-box"}>
                                <h2 className="title">Über uns</h2>
                                <p className="text">Wir sind über 20 Jahren als Vertreiber von Bauvermessungsinstrumenten und Zubehör tätig. Angefangen als „One Man Show“ durch den Gründer Alfred Zenklusen, beschäftigt die ZETECH Baumesstechnik GmbH heute über sechs Mitarbeiter und wird in zweiter Generation von Adrian Zenklusen geführt. In den über 20 Jahren wurde der Tätigkeitsbereich erweitert durch eine zertifizierte In-Haus Service Werkstatt. Ebenfalls um den steigenden Kundenbedürfnissen im Bereich „digitales Bauen“ Unterstützung bieten zu können, wurde das Dienstleistungsportfolio stark auf die Plandaten-Aufbereitung ausgebaut.</p>
                            </ScrollContainer>
                            <ScrollContainer classes={"description-box"}>
                                <h2 className="title">Leitbild</h2>
                                <p className="text">Nebst der immer höher werdenden Anforderungen an Präzision, Wirtschaftlichkeit und Komplexität der Bauvorhaben, schreitet die Digitalisierung in der Baubranche voran. BIM oder digitales Bauen werden immer häufiger ein wichtiger Begriff. Aus diesem Grund haben wir unsere Kernkompetenzen und Sortiment auf diese kommenden Herausforderungen spezialisiert und ausgerichtet. Unser Bestreben ist es weiterhin als sehr verlässlicher Partner unseren Kunden zur Seite zu stehen.</p>
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
