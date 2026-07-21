export interface NavItem {
    title: string;
    link: string;
    description?: string;
    hasDropdown?: boolean;
    dropdownItems?: DropdownItem[];
}

export interface DropdownItem {
    title: string;
    href: string;
    description: string;
}

export const navItems: NavItem[] = [
    {
        title: "Shop",
        link: "/shop",
        description: "Browse our full catalog and categories.",
        hasDropdown: true,
        dropdownItems: [
            {
                title: "Casual",
                href: "/shop#casual",
                description: "T-shirts, jeans, jackets, and casual wear for everyday style.",
            },
            {
                title: "Formal",
                href: "/shop#formal",
                description: "Suits, blazers, dress shirts, and formal wear for professional occasions.",
            },
            {
                title: "Party",
                href: "/shop#party",
                description: "Watches, bags, jewelry, and other fashion accessories for special occasions.",
            },
            {
                title: "Gym",
                href: "/shop#gym",
                description: "Sneakers, pumps, shorts, and other gym wears for your workout needs.",
            }
        ]
    },
    {
        title: "On Sale",
        link: "/sales",
        description: "Check out our latest discounted products.",
        hasDropdown: false
    },
    {
        title: "New Arrivals",
        link: "/arrivals",
        description: "Explore the freshest additions to our collection.",
        hasDropdown: false
    },
    {
        title: "Brands",
        link: "/brands",
        description: "Browse products from your favorite designers.",
        hasDropdown: false
    }
];