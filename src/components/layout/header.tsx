"use client"

import * as React from "react";
import {MenuBar} from "@/components/blocks/menu-bar";
import SearchBar from "@/components/blocks/search-bar";
import {ShoppingCartIcon, UserIcon, HeartIcon, Menu} from "lucide-react";
import ToggleTheme from "@/components/blocks/toggle-theme";
import {useEffect, useState} from "react";
import {usePathname} from "next/navigation";
import {
    Sheet,
    SheetTrigger,
    SheetContent,
} from "@/components/ui/sheet";
import Link from "next/link";
import {cn} from "@/lib/utils";
import {navigationMenuTriggerStyle} from "@/components/ui/navigation-menu";
import {useCartStore} from "@/stores/cart-store";
import {useWishStore} from "@/stores/wish-store";

const Header = ({hasScrolledPastHeroSection}: { hasScrolledPastHeroSection?: boolean }) => {
    const cartCount = useCartStore((state) => state.totalItems());
    const wishListCount = useWishStore((state) => state.totalItems());
    const [open, setOpen] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);
    const location = usePathname()

    useEffect(() => {
        const onScroll = () => setHasScrolled(window.scrollY > 0);
        onScroll();
        window.addEventListener("scroll", onScroll, {passive: true});
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const isHomePage = location.toLowerCase() === "/";

    const closeSheet = () => setOpen(false);

    const isWithinHeroSection = hasScrolledPastHeroSection === false && isHomePage;

    const headerStyle = `shadow-sm bg-background ${isWithinHeroSection ? "supports-[backdrop-filter]:bg-background/10 backdrop-blur" : "backdrop-blur-3xl supports-[backdrop-filter]:bg-background"}`;

    // const mobileNavStyle = "rounded-lg py-3 px-3 transition-all outline-none hover:bg-muted focus:bg-muted focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:outline-1 in-data-[slot=navigation-menu-content]:rounded-md data-[active=true]:bg-muted/50 data-[active=true]:hover:bg-muted data-[active=true]:focus:bg-muted [&_svg:not([class*='size-'])]:size-4"

    return (
        <header
            className={`sticky top-0 left-0 bg-transparent z-50 transition-colors duration-200 ${hasScrolled ? headerStyle : ""}`}>
            <div className="container flex py-6 gap-2">

                {/*    mobile hamburger menu*/}
                <Sheet open={open} onOpenChange={setOpen}>
                    <SheetTrigger asChild className="md:hidden mt-2">
                        <button aria-label="Menu" title="Menu">
                            <Menu className={`w-4 sm:w-6 h-4 sm:h-6 ${isWithinHeroSection ? "text-white" : ""}`}/>
                        </button>
                    </SheetTrigger>
                    <SheetContent side="left" className="md:hidden flex flex-col gap-6 py-3 px-3">
                        <Link href="/" onClick={closeSheet}>
                            <h1 className="text-2xl sm:text-3xl font-bold">Maishop</h1>
                        </Link>

                        <div className="w-full"><SearchBar fullWidth={true}/></div>
                        <div>
                            <div><MenuBar onNavigate={closeSheet} variant="mobile"/></div>

                            <div className="flex flex-col items-start gap-1">
                                <button onClick={closeSheet}
                                      className={cn(
                                          navigationMenuTriggerStyle(),
                                          "relative w-full h-auto justify-between py-2.5"
                                      )}
                                      aria-label="Shopping Cart">
                                <span
                                    className="absolute top-0 right-0 text-background py-px sm:py-0.5 px-1 rounded-sm text-[10px] bg-foreground">{cartCount}</span>
                                    View cart <ShoppingCartIcon className="w-6 h-6"/>
                                </button>
                                <button onClick={closeSheet}
                                      className={cn(
                                          navigationMenuTriggerStyle(),
                                          "relative w-full h-auto justify-between py-2.5"
                                      )}
                                      aria-label="Wishlist">
                                    {wishListCount > 0 && <span
                                        className="absolute top-0 right-0 text-background py-px sm:py-0.5 px-1 rounded-sm text-[10px] bg-foreground">{wishListCount}</span>}
                                    Wish List <HeartIcon className="w-6 h-6"/>
                                </button>
                                <Link href="/account" onClick={closeSheet}
                                      className={cn(
                                          navigationMenuTriggerStyle(),
                                          "relative w-full h-auto justify-between py-2.5"
                                      )}
                                      aria-label="User Account">
                                    Account <UserIcon className="w-6 h-6"/>
                                </Link>
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>

                {/* desktop */}
                <div className="flex items-center justify-between w-full gap-2.5">
                    {/*    logo*/}
                    <Link href="/">
                        <h1 className={`text-2xl sm:text-3xl font-bold ${isWithinHeroSection ? "text-white" : ""}`}>Maishop</h1>
                    </Link>

                    {/*    menu bar - desktop only*/}
                    <div className="hidden md:flex">
                        <MenuBar onNavigate={closeSheet} isWithinHero={isWithinHeroSection} variant="desktop"/>
                    </div>

                    {/*    search bar - desktop only*/}
                    <div className="hidden md:flex">
                        <SearchBar/>
                    </div>

                    {/*    action buttons*/}
                    <div className="flex items-center gap-3">
                        <ToggleTheme isWithinHero={isWithinHeroSection}/>
                        <button aria-label="Shopping Cart" title="Shopping Cart" className="relative">
                            {cartCount > 0 && (
                                <span
                                className="absolute -top-2 sm:-top-1 -right-2 sm:-right-1 text-foreground py-px sm:py-0.5 px-1 rounded-sm text-[10px] bg-background">{cartCount}</span>
                            )}
                            <ShoppingCartIcon
                                className={`w-4 sm:w-6 h-4 sm:h-6 ${isWithinHeroSection ? "text-white" : ""}`}/>
                        </button>
                        <button aria-label="Wishlist" title="Wishlist" className="relative">
                            {wishListCount > 0 && (
                                <span
                                className="absolute -top-2 sm:-top-1 -right-2 sm:-right-1 text-foreground py-px sm:py-0.5 px-1 rounded-sm text-[10px] bg-background">{wishListCount}</span>
                            )}
                            <HeartIcon className={`w-4 sm:w-6 h-4 sm:h-6 ${isWithinHeroSection ? "text-white" : ""}`}/>
                        </button>
                        <Link href="/account" aria-label="User Account" title="User Account">
                            <UserIcon className={`w-4 sm:w-6 h-4 sm:h-6 ${isWithinHeroSection ? "text-white" : ""}`}/>
                        </Link>
                    </div>
                </div>


            </div>
        </header>
    );
};

export default Header;