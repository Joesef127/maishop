"use client"

import * as React from "react"
import Link from "next/link"
import { RiArrowDownSLine } from "@remixicon/react"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { navItems } from "@/data/header-data"
import { cn } from "@/lib/utils"

interface MenuBarProps {
    onNavigate?: () => void
    isWithinHero?: boolean
    variant?: "desktop" | "mobile"
}

export function MenuBar({ onNavigate, isWithinHero, variant = "desktop" }: MenuBarProps) {
    if (variant === "mobile") {
        return <MobileMenuBar onNavigate={onNavigate} />
    }

    return (
        <NavigationMenu className="flex-1 max-w-max">
            <NavigationMenuList className="flex flex-row">
                {navItems.map((item) => (
                    <NavigationMenuItem key={item.title} className={item.hasDropdown ? "relative" : ""}>
                        {item.hasDropdown ? (
                            <>
                                <NavigationMenuTrigger
                                    className={
                                        isWithinHero
                                            ? "text-white focus:bg-black/70 hover:bg-black/70 data-popup-open:bg-black/50 data-popup-open:hover:bg-black data-open:bg-black/50 data-open:hover:bg-black data-open:focus:bg-black"
                                            : ""
                                    }
                                >
                                    {item.title}
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-full gap-2 md:w-125 md:grid-cols-2 lg:w-150">
                                        {item.dropdownItems?.map((dropdownItem) => (
                                            <ListItem
                                                key={dropdownItem.title}
                                                title={dropdownItem.title}
                                                href={dropdownItem.href}
                                                onClick={onNavigate}
                                            >
                                                {dropdownItem.description}
                                            </ListItem>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </>
                        ) : (
                            <NavigationMenuLink
                                asChild
                                className={
                                    navigationMenuTriggerStyle() +
                                    (isWithinHero ? " text-white focus:bg-black/70 hover:bg-black/70" : "")
                                }
                            >
                                <Link href={item.link} onClick={onNavigate}>
                                    {item.title}
                                </Link>
                            </NavigationMenuLink>
                        )}
                    </NavigationMenuItem>
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    )
}

function MobileMenuBar({ onNavigate }: { onNavigate?: () => void }) {
    const [openItem, setOpenItem] = React.useState<string | null>(null)

    return (
        <nav className="flex w-full flex-col gap-1">
            {navItems.map((item) => {
                const isOpen = openItem === item.title

                if (item.hasDropdown) {
                    return (
                        <div key={item.title} className="w-full">
                            <button
                                type="button"
                                onClick={() => setOpenItem(isOpen ? null : item.title)}
                                aria-expanded={isOpen}
                                className={cn(
                                    navigationMenuTriggerStyle(),
                                    "w-full h-auto justify-between py-2.5"
                                )}
                            >
                                {item.title}
                                <RiArrowDownSLine
                                    className={cn("size-4 transition-transform duration-200", isOpen && "rotate-180")}
                                    aria-hidden="true"
                                />
                            </button>
                            {isOpen && (
                                <ul className="flex flex-col gap-1 py-1 pl-3">
                                    {item.dropdownItems?.map((dropdownItem) => (
                                        <li key={dropdownItem.title}>
                                            <Link
                                                href={dropdownItem.href}
                                                onClick={onNavigate}
                                                className="flex flex-col gap-0.5 rounded-lg p-2 text-sm hover:bg-muted"
                                            >
                                                <span className="font-medium leading-none">{dropdownItem.title}</span>
                                                <span className="line-clamp-2 text-muted-foreground">
                                                    {dropdownItem.description}
                                                </span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    )
                }

                return (
                    <Link
                        key={item.title}
                        href={item.link}
                        onClick={onNavigate}
                        className={cn(navigationMenuTriggerStyle(), "w-full h-auto justify-start py-2.5")}
                    >
                        {item.title}
                    </Link>
                )
            })}
        </nav>
    )
}

function ListItem({
                      title,
                      children,
                      href,
                      onClick,
                      ...props
                  }: React.ComponentPropsWithoutRef<"li"> & { href: string; onClick?: () => void }) {
    return (
        <li {...props}>
            <NavigationMenuLink asChild>
                <Link href={href} onClick={onClick}>
                    <div className="flex flex-col gap-1 text-sm">
                        <div className="leading-none font-medium">{title}</div>
                        <div className="line-clamp-2 text-muted-foreground">{children}</div>
                    </div>
                </Link>
            </NavigationMenuLink>
        </li>
    )
}