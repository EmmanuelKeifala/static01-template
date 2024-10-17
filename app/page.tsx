"use client";
import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollY } = useScroll();
  const imageParallax = useTransform(scrollY, [0, 500], [0, -50]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-t  from-indigo-300 to-white  scrollbar-hide"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 py-12 sm:py-24">
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
        >
          <motion.div className="w-full flex flex-col md:flex-row gap-10">
            {/* Text and Features */}
            <motion.div className="md:w-[60%] w-full">
              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight"
                variants={itemVariants}
              >
                AI-Powered Rapid
                <span className="text-indigo-600"> Patient Assessment</span>
              </motion.h1>
              <motion.p
                className="text-xl text-gray-600 mt-3"
                variants={itemVariants}
              >
                Revolutionizing healthcare in Sierra Leone with advanced
                technology, ensuring accessible, equitable, and quality
                healthcare for all.
              </motion.p>

              <motion.button
                className="bg-indigo-600 text-white text-lg font-semibold py-4 px-8 rounded-full 
                         hover:bg-indigo-700 transition duration-300 ease-in-out transform 
                         hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 
                         focus:ring-opacity-50 shadow-lg mt-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variants={itemVariants}
              >
                <Link
                  href={
                    "https://expo.dev/artifacts/eas/4ZmZVHnC41M5kAdHb7A9kq.aab"
                  }
                  target="_blank"
                >
                  Get App
                </Link>
              </motion.button>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              className="md:w-[40%] w-full sticky top-24"
              style={{ y: imageParallax }}
            >
              <motion.img
                src="/hero.png"
                alt="Healthcare Vision"
                className="w-full max-w-2xl mx-auto rounded-2xl shadow-2xl"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div className=" space-y-8" variants={containerVariants}>
          {/* Feature Cards */}
          <motion.div
            className="flex flex-col  md:flex-row gap-5"
            variants={containerVariants}
          >
            {[
              {
                title: "Improve Accessibility",
                description:
                  "Ensuring quality healthcare for all across Sierra Leone.",
                icon: "🌍",
              },
              {
                title: "Enhance Outcomes",
                description:
                  "Using AI for early diagnosis and urgent case prioritization.",
                icon: "🏥",
              },
              {
                title: "Support Providers",
                description: "Streamlining processes to focus on patient care.",
                icon: "👨‍⚕️",
              },
              {
                title: "Empower Patients",
                description:
                  "Providing tools for informed healthcare decisions.",
                icon: "💪",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 
                             hover:shadow-2xl transition-shadow duration-300 ease-in-out"
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
