import React from "react";
import type {Metadata, Viewport} from "next";
import "./globals.css";
import {cn} from "@/lib/utils";
import AnnouncementBar from "@/components/layout/announcement-bar";
import {ThemeProvider} from "@/providers/theme-provider";
import Footer from "@/components/layout/footer";
// import SplashCursor from "@/components/SplashCursor";
import CursorGrid from "@/components/CursorGrid";

export const metadata: Metadata = {
    title: "MAISHOP",
    description: "MAISHOP is a modern e-commerce platform that offers a seamless shopping experience with a wide range of products and services.",
    keywords: ["e-commerce", "online shopping", "modern platform", "products", "services"],
    authors: [{name: "MAISHOP Team", url: "https://www.maishop.com"}],
    creator: "MAISHOP Team",
    publisher: "MAISHOP Inc.",
    openGraph: {
        title: "MAISHOP",
        description: "MAISHOP is a modern e-commerce platform that offers a seamless shopping experience with a wide range of products and services.",
        url: "https://www.maishop.com",
        siteName: "MAISHOP",
        images: [
            {
                url: "https://www.maishop.com/og-image.jpg",
                width: 1200,
                height: 630,
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "MAISHOP",
        description: "MAISHOP is a modern e-commerce platform that offers a seamless shopping experience with a wide range of products and services.",
        images: ["https://www.maishop.com/twitter-image.jpg"],
        creator: "@maishop",
    },
    manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
    themeColor: [
        {media: "(prefers-color-scheme: light)", color: "white"},
        {media: "(prefers-color-scheme: dark)", color: "black"},
    ],
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={cn("h-full antialiased")} suppressHydrationWarning={true}>
        <body className="min-h-full flex flex-col relative z-40" suppressHydrationWarning={true}>
        {/*<SplashCursor*/}
        {/*    DENSITY_DISSIPATION={9}*/}
        {/*    VELOCITY_DISSIPATION={7.5}*/}
        {/*    PRESSURE={0.2}*/}
        {/*    CURL={3}*/}
        {/*    SPLAT_RADIUS={0.1}*/}
        {/*    SPLAT_FORCE={1500}*/}
        {/*    COLOR_UPDATE_SPEED={10}*/}
        {/*    SHADING*/}
        {/*    RAINBOW_MODE*/}
        {/*    COLOR="#A855F7"*/}
        {/*/>*/}
        <CursorGrid
            cellSize={45}
            color="#D946EF"
            radius={140}
            falloff="smooth"
            holdTime={400}
            fadeDuration={550}
            lineWidth={1.2}
            maxOpacity={0.4}
            fillOpacity={0}
            gridOpacity={0}
            cellRadius={0}
            clickPulse
            pulseSpeed={600}
        />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <AnnouncementBar/>
            {children}
            <Footer/>
        </ThemeProvider>
        </body>
        </html>
    );
}