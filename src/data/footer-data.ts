export interface FooterLink {
    label: string;
    route: string;
}

export interface FooterSection {
    title: string;
    links: FooterLink[];
}

export const footerData: FooterSection[] = [
    {
        title: 'COMPANY',
        links: [
            { label: 'About', route: '#' },
            { label: 'Features', route: '#' },
            { label: 'Works', route: '#' },
            { label: 'Career', route: '#' },
        ],
    },
    {
        title: 'HELP',
        links: [
            { label: 'Customer Support', route: '#' },
            { label: 'Delivery Details', route: '#' },
            { label: 'Terms & Conditions', route: '#' },
            { label: 'Privacy Policy', route: '#' },
        ],
    },
    {
        title: 'FAQ',
        links: [
            { label: 'Account', route: '#' },
            { label: 'Manage Deliveries', route: '#' },
            { label: 'Orders', route: '#' },
            { label: 'Payments', route: '#' },
        ],
    },
    {
        title: 'RESOURCES',
        links: [
            { label: 'Free eBooks', route: '#' },
            { label: 'Development Tutorial', route: '#' },
            { label: 'How to - Blog', route: '#' },
            { label: 'Youtube Playlist', route: '#' },
        ],
    },
];