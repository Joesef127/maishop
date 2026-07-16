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
                title: "Men's Clothing",
                href: "/shop/#men",
                description: "T-shirts, shirts, jeans, and jackets for men.",
            },
            {
                title: "Women's Clothing",
                href: "/shop/#women",
                description: "Dresses, tops, skirts, and knitwear for women.",
            },
            {
                title: "Accessories",
                href: "/shop/#accessories",
                description: "Bags, belts, hats, and jewelry to complete your look.",
            },
            {
                title: "Shoes",
                href: "/shop/#shoes",
                description: "Sneakers, boots, sandals, and formal footwear.",
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