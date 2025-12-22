import React from "react";
import { motion } from "framer-motion";
import { SafeImage } from "../../../lib/SafeImage";

function FeatureSection() {
  const features = [
    {
      icon: (
        <SafeImage
          src="/icons/expert.svg"
          alt="expert"
          className="w-8 h-8 sm:w-10 sm:h-10"
        />
      ),
      bgColor: "bg-blue-100 dark:bg-blue-900",
      title: "Israeli Licensed Forensic Tools",
      description: "Industry-grade forensic tools used by professionals.",
    },
    {
      icon: (
        <SafeImage
          src="/icons/fffl.png"
          alt="learning"
          className="w-8 h-8 sm:w-10 sm:h-10"
        />
      ),
      bgColor: "bg-purple-100 dark:bg-purple-900",
      title: "Project-based Learning",
      description: "Gain hands-on experience by working on real-world projects.",
    },
    {
      icon: (
        <SafeImage
          src="/icons/briefcase.svg"
          alt="internship"
          className="w-8 h-8 sm:w-10 sm:h-10"
        />
      ),
      bgColor: "bg-green-100 dark:bg-green-900",
      title: "Internship Opportunities",
      description: "Get placed in top companies with structured internships.",
    },
    {
      icon: (
        <SafeImage
          src="/icons/medal.svg"
          alt="certification"
          className="w-8 h-8 sm:w-10 sm:h-10"
        />
      ),
      bgColor: "bg-yellow-100 dark:bg-yellow-900",
      title: "Certification Programs",
      description:
        "Earn recognized certifications to boost your career prospects.",
    },
    {
      icon: (
        <SafeImage
          src="/icons/briefcase.svg"
          alt="career"
          className="w-8 h-8 sm:w-10 sm:h-10"
        />
      ),
      bgColor: "bg-orange-100 dark:bg-orange-900",
      title: "Career Guidance",
      description: "Expert mentorship to guide your professional journey.",
    },
  ];

  return (
    <div className="relative w-full mt-8 md:-mt-16 lg:-mt-20 z-20">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{
                y: -8,
                scale: 1.04,
              }}
              transition={{
                duration: 0.6,
                delay: 0.2 + index * 0.15,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="
                cursor-pointer
                bg-white
                dark:bg-gradient-to-r dark:from-slate-700 dark:to-slate-800
                rounded-lg sm:rounded-xl
                border border-gray-100 dark:border-gray-700
                shadow-[0_4px_12px_rgba(255,103,0,0.12)]
                hover:shadow-[0_12px_28px_rgba(255,103,0,0.25)]
                transition-shadow duration-300
              "
            >
              <div className="p-3 sm:p-5 flex flex-col items-center text-center">
                <motion.div
                  className={`mb-3 sm:mb-4 p-3 sm:p-5 ${feature.bgColor} rounded-full`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  {feature.icon}
                </motion.div>

                <h3 className="font-heading text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">
                  {feature.title}
                </h3>

                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeatureSection;
