import { Button } from "@/components/ui/button";
import CountUp from "@/utils/count-up";
import { useEffect, useState } from "react";
import {useRouter} from "next/navigation";

const HomeHeroSection = () => {
  const reputationFigures = [
    { number: 50, audience: "International Brands" },
    { number: 500, audience: "High Quality Products" },
    { number: 3000, audience: "Satisfied Customers" },
  ];

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const textVariations = ["CLOTHES", "SHORTS", "SHOES", "DRESSES", "TROUSERS"];
  const [displayedText, setDisplayedText] = useState("CLOTHES");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const router = useRouter()

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % textVariations.length;
      const fullText = textVariations[i];

      setDisplayedText(
        isDeleting
          ? fullText.substring(0, displayedText.length - 1)
          : fullText.substring(0, displayedText.length + 1),
      );

      setTypingSpeed(isDeleting ? 100 : 150);

      if (!isDeleting && displayedText === fullText) {
        setTimeout(() => setIsDeleting(true), 3000);
      } else if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, loopNum, textVariations, typingSpeed]);

  return (
    <section className="container">
      <div className="flex flex-col mt-20 py-12 md:py-20 xl:py-24 gap-8 xl:gap-10 z-20 justify-center items-center">
        <h1 className="text-white tracking-wider text-5xl md:text-6xl xl:text-7xl font-bold md:max-w-2xl xl:max-w-4xl text-wrap text-center">
          FIND <span>CLOTHES</span> THAT MATCHES YOUR STYLE
        </h1>
        <p className="text-white text-lg sm:text-xl xl:text-2xl md:max-w-lg xl:max-w-2xl 2xl:max-w-3xl text-center">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <Button
            onClick={() => router.push("/shop")}
          variant="primary"
          size="custom"
          className="bg-background text-foreground hover:bg-foreground hover:text-background hover:border-white"
        >
          Shop Now
        </Button>
        {/* <div className="flex items-center justify-start">
          {reputationFigures.map((figure, index) => (
            <div
              key={index}
              className={`flex flex-col items-start justify-center border-x  border-white/20
                                ${index === 0 ? "border-l-0" : ""} 
                                ${index === 0 ? "pr-3 sm:pr-6" : "px-3 sm:px-6"} 
                                ${index === reputationFigures.length - 1 ? "pl-3 sm:pl-6 border-r-0" : ""}`}
            >
              <p className="text-white text-2xl sm:text-4xl font-bold">
                <CountUp
                  from={0}
                  to={figure.number}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text"
                  delay={0}
                />
                +
              </p>
              <p className="text-white text-xs sm:text-sm md:text-base">
                {figure.audience}
              </p>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default HomeHeroSection;
