import React, { memo, useEffect, useState } from "react";
import { useLocation, useNavigation } from "react-router-dom";
import { motion } from "framer-motion";

import Loader from "../components/ui/Loader";
import PopUpTimeOut from "../lib/PopUpTimeOut";
import Banner from "../components/HomePage/Banner/Banner";
import AbtCompany from "../components/HomePage/AbtCompany";
import SecurityMarquee from "../components/HomePage/SecurityMarquee";
import Services from "../components/HomePage/Services";
import WhyUs from "../components/HomePage/WhyUs";
import RealCaseStudies from "../components/HomePage/RealCaseStudies";
import ReachUsForm from "../components/ContactUs/ReachUsForm";
import SalaryHikeSection from "../components/HomePage/SalaryHikeSection";
import { LearningOutcomes } from "../components/HomePage/LearningOutcomes";
import TrainerDetails from "../components/HomePage/AboutTrainer";
import AlumniMarquee from "../components/HomePage/AlumniMarquee";
import FeesDetails from "../components/HomePage/FeesDetails";
import JobPreparation from "../components/HomePage/JobPreparation";
import ContactUs from "../components/ContactUs/ContactUs";
import { getSeoData } from "../lib/seoUtil";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: 0.2,
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
  },
};

function Home() {
  const navigation = useNavigation();
  const location = useLocation();
  const seo = getSeoData(location.pathname.slice(1));

  const [showPopup, setShowPopup] = useState(false);
  const [activeLocation, setActiveLocation] = useState("nagpur");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fromIntro = sessionStorage.getItem("fromIntro");

    const timer = setTimeout(() => {
      if (!fromIntro) setShowPopup(true);
      else sessionStorage.removeItem("fromIntro");
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  if (navigation.state === "loading") return <Loader />;

  return (
    <>
      <title>{seo.metaTitle}</title>
      <meta name="description" content={seo.metaDescription} />
      <link rel="canonical" href={seo.canonicalTag} />

      <motion.div
        className="font-sans"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {showPopup && <PopUpTimeOut />}

        <motion.div variants={item}><Banner /></motion.div>
        <motion.div variants={item}><AbtCompany/></motion.div>
         <motion.div variants={item}><SecurityMarquee/></motion.div>
         <motion.div variants={item}><Services/></motion.div>
          <motion.div variants={item}><WhyUs/></motion.div>
          <motion.div variants={item}><RealCaseStudies/></motion.div>
        <motion.div variants={item}><ReachUsForm /></motion.div>
        <motion.div variants={item}><SalaryHikeSection /></motion.div>
        <motion.div variants={item}><LearningOutcomes /></motion.div>
        <motion.div variants={item}><TrainerDetails /></motion.div>
        <motion.div variants={item}><AlumniMarquee /></motion.div>
        <motion.div variants={item}><FeesDetails /></motion.div>
        <motion.div variants={item}><JobPreparation /></motion.div>

        <motion.div variants={item}>
          <ContactUs
            initialLocation={activeLocation}
            setActiveLocation={setActiveLocation}
          />
        </motion.div>
      </motion.div>
    </>
  );
}

export default memo(Home);
