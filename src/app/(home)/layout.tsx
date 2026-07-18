"use client";

// import {useTheme} from "next-themes";
// import SplashCursor from "@/components/SplashCursor";
import React from "react";


function HomeLayout({children}: { children: React.ReactNode }) {
    // const {resolvedTheme} = useTheme()
    // const isDark = resolvedTheme === "dark"

    return (
        <>
            {/* <SplashCursor
                DENSITY_DISSIPATION={4}
                VELOCITY_DISSIPATION={7.5}
                PRESSURE={0.2}
                CURL={3}
                SPLAT_RADIUS={0.1}
                SPLAT_FORCE={1500}
                COLOR_UPDATE_SPEED={10}
                SHADING
                RAINBOW_MODE={false}
                COLOR={isDark ? "#000000" : "#ffffff"}
            /> */}

            {children}
        </>
    )
}

export default HomeLayout;