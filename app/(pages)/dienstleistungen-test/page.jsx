import "@/app/(pages)/dienstleistungen-test/style.scss";

import ViewContainerReveal from "@/containers/view-container-reveal.jsx";
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

            <section className="timeline-section">
                <div className="section-container">
                    <div className="grid-wrapper">
                        <div className="grid-container odd">
                            <div className="grid-box-text odd odd-first">
                                <ViewContainerLtr classes={"view-container"}>
                                    <h2 className="box-title">Datenaufbereitung</h2>
                                    <p className="box-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quibusdam enim nulla temporibus dolor voluptates repellat et. Rem, necessitatibus dolorem!</p>
                                </ViewContainerLtr>
                            </div>
                            <ViewContainerRtl classes={"grid-box-asset"}>
                                <div className="asset-holder">
                                    <img src="" alt="" className="asset" />
                                </div>
                            </ViewContainerRtl>
                        </div>
                        <div className="grid-container even">
                            <div className="grid-box-text even">
                                <ViewContainerRtl classes={"view-container"}>
                                    <h2 className="box-title">Bestandaufnahme</h2>
                                    <p className="box-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quibusdam enim nulla temporibus dolor voluptates repellat et. Rem, necessitatibus dolorem!</p>
                                </ViewContainerRtl>
                            </div>
                            <ViewContainerLtr classes={"grid-box-asset"}>
                                <div className="asset-holder">
                                    <img src="" alt="" className="asset" />
                                </div>
                            </ViewContainerLtr>
                        </div>
                        <div className="grid-container odd">
                            <div className="grid-box-text odd">
                                <ViewContainerLtr classes={"view-container"}>
                                    <h2 className="box-title">Massenermittlung / Aufnahme</h2>
                                    <p className="box-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quibusdam enim nulla temporibus dolor voluptates repellat et. Rem, necessitatibus dolorem!</p>
                                </ViewContainerLtr>
                            </div>
                            <ViewContainerRtl classes={"grid-box-asset"}>
                                <div className="asset-holder">
                                    <img src="" alt="" className="asset" />
                                </div>
                            </ViewContainerRtl>
                        </div>
                        <div className="grid-container even">
                            <div className="grid-box-text even even-last">
                                <ViewContainerRtl classes={"view-container"}>
                                    <h2 className="box-title">Schulungen</h2>
                                    <p className="box-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quibusdam enim nulla temporibus dolor voluptates repellat et. Rem, necessitatibus dolorem!</p>
                                </ViewContainerRtl>
                            </div>
                            <ViewContainerLtr classes={"grid-box-asset"}>
                                <div className="asset-holder">
                                    <img src="" alt="" className="asset" />
                                </div>
                            </ViewContainerLtr>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
