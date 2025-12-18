import { motion } from "framer-motion";
import { useState } from "react";
import FreeDemoForm from "../../ContactUs/FreeDemoForm";
import CompanyLogoGlobe from "./CompanyLogoGlobe";
import FeatureSection from "./FeatureSection";
import { SafeImage } from "../../../lib/SafeImage";

function Banner() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="relative bg-white dark:bg-gray-900 transition-colors duration-300 pb-0 w-full">
      {showForm && (
        <FreeDemoForm
          onClose={() => setShowForm(false)}
          title1={"Join Our Free Workshop"}
          title2={"Ask Your Questions"}
        />
      )}

    <section className="relative w-full min-h-[80vh] flex items-center overflow-hidden px-6 sm:px-10 md:px-16">

  {/* Background Image */}
  <div className="absolute inset-0 z-0">
    <img
      src="/bannertop.jpg"
      alt="Banner Background"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/60 z-[1]" />

  {/* Content */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="relative z-10 max-w-3xl text-white"
  >
    {/* Highlight Tag */}
     <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6"> WE KNOW WHAT
       </h1>

    {/* Main Heading */}
    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
      IT MEANS TO YOU
    </h1>

    {/* Description */}
    <p className="text-base sm:text-lg text-gray-200 max-w-xl mb-8">
      We know what it means to you — the dreams you're building and the future
      you're shaping. We're here to support you with clarity, care, and
      confidence at every step.
    </p>

    {/* CTA Buttons */}
    <div className="flex flex-col sm:flex-row gap-4">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-md shadow-lg"
      >
        Request a Security Audit
      </motion.button>

    </div>
  </motion.div>
</section>


      <section className="hidden sm:block">
        <FeatureSection />
      </section>
    </div>
  );
}

export default Banner;
