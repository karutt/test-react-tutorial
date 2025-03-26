// import { Provider } from "@/components/ui/provider";
import ClientProvider from "@/components/ui/client-provider";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const title = "X vs O: Ultimate Showdown";
const description =
    "シンプルにして奥深い、究極の頭脳戦。 「三目並べ」を超えた、戦略と直感のバトルが今ここに。 友達と、またはAIと、限界まで読み合え。 あなたの “X” は、勝利の一手になれるか？";
const site_name = "X vs O";
const url = "https://test-react-tutorial-rust.vercel.app/";
const imgUrl = "https://test-react-tutorial-rust.vercel.app/og-image.png";
const ogImageWidth = 1200;
const ogImageHeight = 900;

export const metadata: Metadata = {
    title: title,
    description: description,
    openGraph: {
        title: title,
        description: description,
        url: url,
        siteName: site_name,
        locale: "ja_JP",
        type: "website",
        images: [
            {
                url: imgUrl,
                width: ogImageWidth,
                height: ogImageHeight,
                type: "image/png",
            },
        ],
    },
    alternates: {
        canonical: url,
    },
    viewport: {
        width: "device-width",
        initialScale: 1,
    },
    icons: {
        icon: "/favicon.ico",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={`${geistSans.variable} ${geistMono.variable}`}>
                <ClientProvider>{children}</ClientProvider>
            </body>
        </html>
    );
}
