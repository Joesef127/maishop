"use client";

import HomeHeroSection from "@/components/sections/home/home-hero-section";
import {images} from "@/lib";
import Header from "@/components/layout/header";
import {useEffect, useState, useRef} from "react";
import NewArrivals from "@/components/sections/home/new-arrivals";
import TopSelling from "@/components/sections/home/top-selling";
import Testimonials from "@/components/sections/home/testimonials";
import BrowseStyle from "@/components/sections/home/browse-style";

export default function Home() {
    const [hasScrolledPastHeroSection, setHasScrolledPastHeroSection] = useState(false);
    const heroRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!heroRef.current) return;
            const heroBottom = heroRef.current.getBoundingClientRect().bottom;
            if (heroBottom <= 100) {
                setHasScrolledPastHeroSection(true);
            } else if (heroBottom > 100) {
                setHasScrolledPastHeroSection(false);
            }
        };

        window.addEventListener("scroll", handleScroll, {passive: true});
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <main className="relative space-y-12 sm:space-y-20">
            <div ref={heroRef} className="relative min-h-screen w-full">
                <Header hasScrolledPastHeroSection={hasScrolledPastHeroSection}/>

                {/* IMAGE LAYER, own overflow-hidden wrapper so Header sits outside any clipping ancestor */}
                <div className="absolute inset-0 -z-10 overflow-hidden">
                    <div
                        className="absolute -inset-7.5 bg-cover bg-right animate-ken-burns"
                        style={{backgroundImage: `url(${images.hero_bg.src})`}}
                    />
                </div>

                {/* Dark Overlay for readability */}
                <div className="absolute inset-0 z-0 bg-black/40 pointer-events-none"/>


                <div className="relative z-10 w-full h-full flex flex-col">
                    <HomeHeroSection />
                </div>
            </div>

            <div
                className={`fixed top-0 left-0 w-full z-50 transition-opacity duration-50 ${
                    hasScrolledPastHeroSection ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
                aria-hidden={!hasScrolledPastHeroSection}
            >
                <Header hasScrolledPastHeroSection={hasScrolledPastHeroSection}/>
            </div>

            <NewArrivals/>

            <TopSelling />

            <BrowseStyle />

            <Testimonials />

        </main>
    );
}