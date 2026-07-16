import InputBar from "@/components/blocks/input-bar";
import {Button} from "@/components/ui/button";
import {Mail} from "lucide-react";
import {
    RiFacebookLine,
    RiInstagramLine,
    RiTwitterXLine
} from "@remixicon/react";
import Link from "next/link";
import {footerData} from "@/data/footer-data";

const NewsletterCTA = () => {
    return (
        <div
            className="bg-foreground px-6 sm:px-8 md:px-10 xl:px-12 py-9 rounded-2xl grid gap-5 lg:flex justify-between items-center">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-background max-w-full lg:max-w-2/4">STAY UP
                TO DATE ABOUT OUR LATEST OFFERS</h1>
            <div
                className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-col gap-2.5 items-center justify-center lg:justify-between w-full sm:min-w-xs lg:max-w-2/5">
                <InputBar fullWidth={true} Icon={Mail} hasIcon={true}/>
                <Button variant="secondary" size="custom" className="w-full rounded-full">Subscribe to
                    Newsletter</Button>
            </div>
        </div>
    )
}

const Footer = () => {
    return (
        <footer
            className="relative bg-layout pt-14 md:pt-24 xl:pt-28 flex flex-col gap-5 mt-48">
            <div className="container">
                <div className="-mt-48 mx-auto">
                    <NewsletterCTA/>
                </div>
                <div className="grid lg:grid-cols-5 mt-5 gap-8">
                    <div className="flex flex-col gap-4 sm:gap-6">
                        <h1 className="font-bold text-3xl sm:text-4xl">Maishop</h1>
                        <p className="text-sm max-w-4/5 sm:max-w-full text-foreground/70">We have clothes that suits
                            your style and which you’re proud to wear. From women to men.</p>
                        <div className="flex items-center gap-3">
                            <Link href="#"
                                  className="size-8 flex items-center justify-center bg-foreground p-2 rounded-full">
                                <RiTwitterXLine className="w-4 sm:w-6 h-4 sm:h-6 text-background"/>
                            </Link>
                            <Link href="#"
                                  className="size-8 flex items-center justify-center bg-foreground p-2 rounded-full">
                                <RiFacebookLine className="w-4 sm:w-6 h-4 sm:h-6 text-background"/>
                            </Link>
                            <Link href="#"
                                  className="size-8 flex items-center justify-center bg-foreground p-2 rounded-full">
                                <RiInstagramLine className="w-4 sm:w-6 h-4 sm:h-6 text-background"/>
                            </Link>
                        </div>
                    </div>
                    <div className="col-span-1 lg:col-span-4 grid grid-cols-2 sm:grid-cols-4 gap-6">
                        {
                            footerData.map((section, index) => (
                                <div key={index} className="flex flex-col gap-2 md:gap-4">
                                    <h2 className="font-medium tracking-widest text-base md:text-lg">{section.title}</h2>
                                    <ul className="flex flex-col gap-2.5">
                                        {section.links.map((link, linkIndex) => (
                                            <li key={linkIndex}>
                                                <Link href={link.route}
                                                      className="text-sm md:text-base text-foreground/70 hover:border-b hover:border-foreground/70 duration-300 hover:text-foreground">{link.label}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="border-t border-foreground/10 mt-10 pt-6 pb-12 lg:pb-16">
                    <p className="text-sm text-center text-foreground/70">© {new Date().getFullYear()} Maishop. All
                        rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
