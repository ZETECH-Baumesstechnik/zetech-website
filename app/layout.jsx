import "@/app/globals.scss";

import Header from "@/components/header.jsx";
import Footer from "@/components/footer.jsx";

export const metadata = {
    title: {
        default: "ZETECH Baumesstechnik GmbH",
        template: "%s | ZETECH Baumesstechnik GmbH",
    },
    description: "Beratung, Miete, Verkauf und Service von Baumesstechnik",
    keywords: ["Tachymeter","Baumesstechnik", "Baulaser", "Baustelle","Robotik Station","GPS","Leica","Geomax","leica",],
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
