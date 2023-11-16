import "@/app/(pages)/dienstleistungen-test/style.scss";

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
                    <div className="flex-grid">
                        <div className="text-box col-a first circle">
                            <h2 className="title">Datenaufbereitung</h2>
                            <p className="text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam dignissimos omnis voluptatem delectus consequuntur hic? Minima quidem excepturi amet quaerat?</p>
                        </div>
                        <div className="asset-box col-a">
                            <div className="asset-holder">
                                <iframe src="/documents/dienstleistungen/model.html" referrerPolicy="no-referrer" loading="lazy" title="3D Model" className="frame"></iframe>
                                <Link href={"/documents/dienstleistungen/model.html"} target="_blank" className="model-link">
                                    Model öffnen
                                    <RxOpenInNewWindow className="icon" />
                                </Link>
                            </div>
                        </div>
                        <div className="text-box col-b">
                            <h2 className="title">Bestandaufnahme</h2>
                            <p className="text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam dignissimos omnis voluptatem delectus consequuntur hic? Minima quidem excepturi amet quaerat?</p>
                        </div>
                        <div className="asset-box col-b circle">
                            <div className="asset-holder"></div>
                        </div>
                        <div className="text-box col-c circle">
                            <h2 className="title">Massenermittlung / Aufnahme</h2>
                            <p className="text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam dignissimos omnis voluptatem delectus consequuntur hic? Minima quidem excepturi amet quaerat?</p>
                        </div>
                        <div className="asset-box col-c">
                            <div className="asset-holder"></div>
                        </div>
                        <div className="text-box col-d">
                            <h2 className="title">Schulungen</h2>
                            <p className="text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam dignissimos omnis voluptatem delectus consequuntur hic? Minima quidem excepturi amet quaerat?</p>
                        </div>
                        <div className="asset-box col-d last circle">
                            <div className="asset-holder"></div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
