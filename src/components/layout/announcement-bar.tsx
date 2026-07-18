"use client";

import {usePathname} from "next/navigation";

const AnnouncementBar = () => {
    const location = usePathname()

    const isHomePage = location.toLowerCase() === "/";

  return (
    <div className={`${isHomePage ? "bg-background" : "bg-foreground"} bg-opacity-70 py-2.5 px-2 text-center text-xs sm:text-sm`}>
        <p className={`text-xs text-center ${isHomePage ? "text-foreground" : "text-background"}`}>Sign up and get 20% off to your first order. <a href="/signup" className="underline">Sign Up Now</a></p>
    </div>
  )
}

export default AnnouncementBar;