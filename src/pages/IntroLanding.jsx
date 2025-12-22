import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import introBg from "../assets/intro-bg.jpg";

const SECTIONS = 4;
const MAX_ZOOM = 1.25;

const SLIDES = [
  {
    title: "BUILT FOR DATA PRECIOUSNESS",
    desc: "Everence combines always-on infrastructure with deep domain expertise.",
  },
  {
    title: "DESIGNED FOR SCALE",
    desc: "Built to scale with your data, teams, and operational growth.",
  },
  {
    title: "ENGINEERED FOR TRUST",
    desc: "Forensic precision ensuring integrity, security, and reliability.",
  },
  {
    title: "READY FOR THE FUTURE",
    desc: "Advance confidently into tomorrow’s data-driven world.",
  },
];

const IntroLanding = () => {
  const navigate = useNavigate();
  const locked = useRef(false);

  const [zoom, setZoom] = useState(1);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (locked.current) return;

      const scrollY = window.scrollY;
      const maxScroll = window.innerHeight * (SECTIONS - 1);
      const progress = Math.min(scrollY / maxScroll, 1);

      // Smooth ease-out zoom
      const eased = 1 - Math.pow(1 - progress, 3);

      setZoom(1 + eased * (MAX_ZOOM - 1));

      const index = Math.min(
        Math.floor(eased * SECTIONS),
        SECTIONS - 1
      );
      setActiveIndex(index);

      if (progress >= 1) {
        redirect();
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const redirect = () => {
    if (locked.current) return;
    locked.current = true;

    sessionStorage.setItem("fromIntro", "true");
    navigate("/home");
  };

  return (
    <>
      {/* Fixed background */}
      <motion.div
        className="fixed inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${introBg})`,
          transformOrigin: "center center",
        }}
        animate={{ scale: zoom }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      />

      {/* Fixed text */}
      <div
        className="fixed inset-0 z-10 flex flex-col items-center justify-center text-center px-6 cursor-pointer"
        onClick={redirect}
      >
        <motion.h1
          key={activeIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-light tracking-widest text-gray-800"
        >
          {SLIDES[activeIndex].title}
        </motion.h1>

        <motion.p
          key={`desc-${activeIndex}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="mt-4 max-w-2xl text-gray-500"
        >
          {SLIDES[activeIndex].desc}
        </motion.p>
      </div>

      {/* Scroll space */}
      <div style={{ height: `${SECTIONS * 100}vh` }} />
    </>
  );
};

export default IntroLanding;
