import {Button} from "@/components/ui/button";
import CountUp from "@/utils/count-up";

const HomeHeroSection = () => {
    const reputationFigures = [
        {number: 50, audience: "International Brands"},
        {number: 500, audience: "High Quality Products"},
        {number: 3000, audience: "Satisfied Customers"},
    ]

    return (
        <section className="container">
            <div className="flex flex-col py-28 md:py-32 xl:py-24 gap-6 lg:gap-8 xl:gap-10 z-20">
                <h1 className="text-white text-4xl sm:text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl font-bold md:max-w-2xl xl:max-w-3xl 2xl:max-w-5xl">FIND
                    CLOTHES THAT MATCHES YOUR STYLE</h1>
                <p className="text-white text-lg sm:text-xl xl:text-2xl mb-6 md:max-w-lg xl:max-w-2xl 2xl:max-w-3xl">Browse
                    through our diverse range of
                    meticulously
                    crafted garments, designed to bring out your individuality and cater to your sense of
                    style.</p>
                <Button variant="primary" size="custom">Shop Now</Button>
                <div className="flex items-center justify-start">
                    {
                        reputationFigures.map((figure, index) => (
                            <div key={index}
                                className={`flex flex-col items-start justify-center border-x  border-white/20
                                ${index === 0 ? "border-l-0" : ""} 
                                ${index === 0 ? "pr-3 sm:pr-6" : "px-3 sm:px-6"} 
                                ${index === reputationFigures.length - 1 ? "pl-3 sm:pl-6 border-r-0" : ""}`}>
                                <p className="text-white text-2xl sm:text-4xl font-bold">
                                    <CountUp
                                        from={0}
                                        to={figure.number}
                                        separator=","
                                        direction="up"
                                        duration={1}
                                        className="count-up-text"
                                        delay={0}
                                    />+</p>
                                <p className="text-white text-xs sm:text-sm md:text-base">{figure.audience}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default HomeHeroSection;