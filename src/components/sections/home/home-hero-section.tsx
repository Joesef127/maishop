import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";

const HomeHeroSection = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const textVariations = ["CLOTHES", "SHORTS", "SHOES", "DRESSES", "TROUSERS"];
  const [displayedText, setDisplayedText] = useState("CLOTHES");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const router = useRouter();

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
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-white tracking-wider text-5xl md:text-6xl xl:text-7xl font-bold md:max-w-2xl xl:max-w-4xl text-wrap text-center"
        >
          FIND <span>CLOTHES</span> THAT MATCHES YOUR STYLE
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-white text-lg sm:text-xl xl:text-2xl md:max-w-lg xl:max-w-2xl 2xl:max-w-3xl text-center"
        >
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          <Button
            onClick={() => router.push("/shop")}
            variant="primary"
            size="custom"
            className="bg-background text-foreground hover:bg-foreground hover:text-background hover:border-white transition-all shadow-lg"
          >
            Shop Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeHeroSection;
