import {Button} from "@/components/ui/button";

const HomeHeroSection = () => {
    return (
        <section className="container">
            <div className="flex flex-col pt-28 md:pt-32 xl:pt-48 gap-6 lg:gap-8">
                <h1 className="text-white text-4xl sm:text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl font-bold md:max-w-2xl xl:max-w-3xl 2xl:max-w-5xl">FIND
                    CLOTHES THAT MATCHES YOUR STYLE</h1>
                <p className="text-white text-lg sm:text-xl xl:text-2xl mb-6 md:max-w-lg xl:max-w-2xl 2xl:max-w-3xl">Browse
                    through our diverse range of
                    meticulously
                    crafted garments, designed to bring out your individuality and cater to your sense of
                    style.</p>
                <Button variant="primary" size="custom">Shop Now</Button>
            </div>
        </section>
    );
};

export default HomeHeroSection;