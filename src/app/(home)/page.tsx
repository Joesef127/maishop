"use client";

import HomeHeroSection from "@/components/sections/home-hero-section";
import {images} from "@/lib";
import Header from "@/components/layout/header";
import {useEffect, useState, useRef} from "react";

export default function Home() {
    const [showStickyHeader, setShowStickyHeader] = useState(false);
    const [hasScrolledPastHeroSection, setHasScrolledPastHeroSection] = useState(false);
    const heroRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!heroRef.current) return;
            const heroBottom = heroRef.current.getBoundingClientRect().bottom;
            if (heroBottom < 0) {
                setShowStickyHeader(true);
                setHasScrolledPastHeroSection(true);
            } else {
                setShowStickyHeader(false);
                setHasScrolledPastHeroSection(false);
            }
        };

        window.addEventListener("scroll", handleScroll, {passive: true});
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <main className="relative">
            <div ref={heroRef} className="bg-cover bg-center min-h-screen"
                 style={{backgroundImage: `url(${images.hero_bg.src})`}}>
                <div className="absolute inset-0 bg-black/20 bg-opacity-40 pointer-events-none"></div>
                <Header hasScrolledPastHeroSection={hasScrolledPastHeroSection}/>
                <HomeHeroSection/>
            </div>
            {showStickyHeader && <Header hasScrolledPastHeroSection={hasScrolledPastHeroSection}/>}
            <section className="flex items-center justify-center py-96 my-96">
                <div className="container">
                    <h1>Collections</h1>
                    <div>this is a test section</div>
                </div>
            </section>
        </main>
    );
}
