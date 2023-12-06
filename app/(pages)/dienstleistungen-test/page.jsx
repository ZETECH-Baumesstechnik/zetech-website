import "@/app/(pages)/dienstleistungen-test/style.scss";

import ViewContainerLtr from "@/containers/view-container-ltr.jsx";
import ViewContainerRtl from "@/containers/view-container-rtl.jsx";

import Link from "next/link";

import { RxOpenInNewWindow } from "react-icons/rx";

export const metadata = {
    title: "Dienstleistungen",
};

export default function Page() {
    return (
        <main className="dienstleistungen-page">
            <section className="intro-section">
                <div className="section-container">
                    <div className="flex-grid">
                        <h1 className="title">Dienstleistungen</h1>
                        <p className="text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut vel tenetur molestias dolorum earum rerum odit reiciendis maiores ex unde voluptatibus, suscipit laboriosam rem nobis fugit! Hic similique dicta ducimus.</p>
                    </div>
                </div>
            </section>

            <section className="datenaufbereitung-section">
                <div className="title-container">
                    <h1 className="section-title">Datenaufbereitung</h1>
                </div>
                <div className="section-container">
                    <div className="grid-wrapper">
                        <div className="grid-container odd">
                            <div className="grid-box-text odd odd-first">
                                {/* <ViewContainerLtr classes={"view-container"}> */}
                                <div className="view-container">
                                    <h2 className="box-title">Daten Grundlage</h2>
                                    <p className="box-text">Sie senden uns Ihren zu bearbeitenden Plan zu, sei das als DXF oder DWG Datei.</p>
                                </div>
                                {/* </ViewContainerLtr> */}
                            </div>
                            {/* <ViewContainerRtl classes={"grid-box-asset"}> */}
                            <div className="grid-box-asset">
                                <div className="asset-holder">
                                    <img src="/images/dienstleistungen/datenaufbereitung-plan.png" alt="Plan" loading="lazy" className="asset" />
                                </div>
                            </div>
                            {/* </ViewContainerRtl> */}
                        </div>
                        <div className="grid-container even">
                            <div className="grid-box-text even">
                                <ViewContainerRtl classes={"view-container"}>
                                    <h2 className="box-title">Aufbereitung der Daten nach Kundenwunsch</h2>
                                    <ul className="box-list">
                                        <li className="list-item">
                                            <span className="point">{"•"}</span>Erstellung eines 2D oder 3D Models
                                        </li>
                                        <li className="list-item">
                                            <span className="point">{"•"}</span>Georeferenzierung des Plans
                                        </li>
                                        <li className="list-item">
                                            <span className="point">{"•"}</span>Erstellen von Absteckplänen {"("}Punkte und Linien und Höhen{")"}
                                        </li>
                                        <li className="list-item">
                                            <span className="point">{"•"}</span>Auf- und Abtrag Höhenmodelle
                                        </li>
                                        <li className="list-item">
                                            <span className="point">{"•"}</span>Anpassung der Plangrundlage {"("}z.B. für Gunit, Sickerbeton{")"}
                                        </li>
                                    </ul>
                                </ViewContainerRtl>
                            </div>
                            <ViewContainerLtr classes={"grid-box-asset"}>
                                <div className="asset-holder">
                                    <iframe src="/documents/dienstleistungen/model.html" referrerPolicy="no-referrer" loading="lazy" title="3D Model" className="frame"></iframe>
                                    <Link href={"/documents/dienstleistungen/model.html"} target="_blank" className="model-link">
                                        <span className="text">Model öffnen</span>
                                        <RxOpenInNewWindow className="icon" />
                                    </Link>
                                </div>
                            </ViewContainerLtr>
                        </div>
                        <div className="grid-container odd">
                            <div className="grid-box-text odd">
                                <ViewContainerLtr classes={"view-container"}>
                                    <h2 className="box-title">Einlesen der bearbeiteten Daten</h2>
                                    <ul className="box-list">
                                        <li className="list-item">
                                            <span className="point">{"•"}</span>GPS System
                                        </li>
                                        <li className="list-item">
                                            <span className="point">{"•"}</span>Total Station
                                        </li>
                                        <li className="list-item">
                                            <span className="point">{"•"}</span>Maschinensteuerung
                                        </li>
                                    </ul>
                                </ViewContainerLtr>
                            </div>
                            <ViewContainerRtl classes={"grid-box-asset"}>
                                <div className="asset-holder">
                                    <img src="/images/dienstleistungen/datenaufbereitung-tablet.png" alt="Plan auf Tablet" loading="lazy" className="asset" />
                                </div>
                            </ViewContainerRtl>
                        </div>
                        <div className="grid-container even">
                            <div className="grid-box-text even even-last">
                                <ViewContainerRtl classes={"view-container"}>
                                    <h2 className="box-title">Begleitung - Support - Schulung</h2>
                                    <p className="box-text">Nachdem Sie die Daten von uns erhalten haben, können Sie mit den Arbeiten loslegen. Gerne unterstützen wir Sie bei Fragen oder schulen Ihre Mitarbeiter.</p>
                                </ViewContainerRtl>
                            </div>
                            <ViewContainerLtr classes={"grid-box-asset"}>
                                <div className="asset-holder">
                                    <img src="/images/dienstleistungen/datenaufbereitung-schulung.jpg" alt="Instruktion" loading="lazy" className="asset" />
                                </div>
                            </ViewContainerLtr>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bestandaufnahme-section">
                <div className="title-container">
                    <h1 className="section-title">Bestandaufnahme</h1>
                </div>
                <div className="section-container">
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque eius quisquam saepe eaque hic voluptates aliquid, magnam harum velit dolore quidem consectetur porro nam laborum libero ducimus unde? Ad omnis id excepturi in dolorum ea sed, maiores, velit nisi animi quisquam numquam harum modi accusantium nostrum atque, dolores necessitatibus? Molestias praesentium voluptate saepe temporibus nam eum ut possimus blanditiis est facere tempore, error ab ea, cupiditate officiis sapiente veritatis numquam quasi maiores itaque doloribus nobis. Provident debitis esse molestias earum quia recusandae sequi soluta asperiores voluptates temporibus, iste error excepturi, quae dolores! Aliquam maiores earum est perferendis voluptas labore quas voluptatem laborum facere? Recusandae odio voluptatem soluta debitis libero accusamus necessitatibus ratione quibusdam distinctio doloremque quas voluptatum ipsa repellat animi, similique ipsum facere suscipit fuga quisquam commodi
                        omnis vel perspiciatis hic! Voluptatibus iusto vitae repellendus sit non autem saepe earum porro officiis, natus rerum quas ad quisquam, voluptatum velit. Quibusdam illum, a reprehenderit rem tenetur repellendus dolores earum doloribus. Molestias odit placeat, inventore dolorem dolor maxime beatae aspernatur error eveniet laboriosam architecto eum cum quo, neque nostrum consequuntur eaque ipsum sed voluptate? Quisquam ad magnam fuga. Quo modi fuga molestiae, distinctio a doloremque minus ad dolorum temporibus incidunt! Reprehenderit, animi.
                    </p>
                </div>
            </section>

            <section className="massenermittlung-aufnahme-section">
                <div className="title-container">
                    <h1 className="section-title">Massenermittlung / Aufnahme</h1>
                </div>
                <div className="section-container">
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque eius quisquam saepe eaque hic voluptates aliquid, magnam harum velit dolore quidem consectetur porro nam laborum libero ducimus unde? Ad omnis id excepturi in dolorum ea sed, maiores, velit nisi animi quisquam numquam harum modi accusantium nostrum atque, dolores necessitatibus? Molestias praesentium voluptate saepe temporibus nam eum ut possimus blanditiis est facere tempore, error ab ea, cupiditate officiis sapiente veritatis numquam quasi maiores itaque doloribus nobis. Provident debitis esse molestias earum quia recusandae sequi soluta asperiores voluptates temporibus, iste error excepturi, quae dolores! Aliquam maiores earum est perferendis voluptas labore quas voluptatem laborum facere? Recusandae odio voluptatem soluta debitis libero accusamus necessitatibus ratione quibusdam distinctio doloremque quas voluptatum ipsa repellat animi, similique ipsum facere suscipit fuga quisquam commodi
                        omnis vel perspiciatis hic! Voluptatibus iusto vitae repellendus sit non autem saepe earum porro officiis, natus rerum quas ad quisquam, voluptatum velit. Quibusdam illum, a reprehenderit rem tenetur repellendus dolores earum doloribus. Molestias odit placeat, inventore dolorem dolor maxime beatae aspernatur error eveniet laboriosam architecto eum cum quo, neque nostrum consequuntur eaque ipsum sed voluptate? Quisquam ad magnam fuga. Quo modi fuga molestiae, distinctio a doloremque minus ad dolorum temporibus incidunt! Reprehenderit, animi.
                    </p>
                </div>
            </section>

            <section className="schulungen-section">
                <div className="title-container">
                    <h1 className="section-title">Schulungen</h1>
                </div>
                <div className="section-container">
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque eius quisquam saepe eaque hic voluptates aliquid, magnam harum velit dolore quidem consectetur porro nam laborum libero ducimus unde? Ad omnis id excepturi in dolorum ea sed, maiores, velit nisi animi quisquam numquam harum modi accusantium nostrum atque, dolores necessitatibus? Molestias praesentium voluptate saepe temporibus nam eum ut possimus blanditiis est facere tempore, error ab ea, cupiditate officiis sapiente veritatis numquam quasi maiores itaque doloribus nobis. Provident debitis esse molestias earum quia recusandae sequi soluta asperiores voluptates temporibus, iste error excepturi, quae dolores! Aliquam maiores earum est perferendis voluptas labore quas voluptatem laborum facere? Recusandae odio voluptatem soluta debitis libero accusamus necessitatibus ratione quibusdam distinctio doloremque quas voluptatum ipsa repellat animi, similique ipsum facere suscipit fuga quisquam commodi
                        omnis vel perspiciatis hic! Voluptatibus iusto vitae repellendus sit non autem saepe earum porro officiis, natus rerum quas ad quisquam, voluptatum velit. Quibusdam illum, a reprehenderit rem tenetur repellendus dolores earum doloribus. Molestias odit placeat, inventore dolorem dolor maxime beatae aspernatur error eveniet laboriosam architecto eum cum quo, neque nostrum consequuntur eaque ipsum sed voluptate? Quisquam ad magnam fuga. Quo modi fuga molestiae, distinctio a doloremque minus ad dolorum temporibus incidunt! Reprehenderit, animi.
                    </p>
                </div>
            </section>
        </main>
    );
}
