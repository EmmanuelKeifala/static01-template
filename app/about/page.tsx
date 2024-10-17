"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

// const MotionImage = motion.img;
// const MotionVideo = motion.video;

export default function About() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollY } = useScroll();
  const titleOpacity = useTransform(scrollY, [0, 100], [1, 0.2]);
  const titleScale = useTransform(scrollY, [0, 100], [1, 0.95]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  return (
    <motion.section
      className="bg-gradient-to-t  from-indigo-300 to-white  min-h-screen py-16 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        variants={staggerContainerVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
      >
        {/* Page Title */}
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold text-gray-900 text-center mb-16"
          style={{ opacity: titleOpacity, scale: titleScale }}
        >
          About <span className="text-indigo-600">Triage</span>
        </motion.h1>

        {/* Vision Section */}
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between mb-24"
          variants={fadeInUpVariants}
        >
          <div className="w-full text-center mb-8 lg:mb-0 lg:pr-12 ">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-indigo-700 mb-6"
              variants={fadeInUpVariants}
            >
              Our Vision
            </motion.h2>
            <motion.p
              className="text-xl text-gray-700 leading-relaxed"
              variants={fadeInUpVariants}
            >
              Triage is on a mission to revolutionize healthcare in Sierra
              Leone. We're leveraging cutting-edge technology to tackle critical
              challenges, ensuring that quality healthcare is not just a
              privilege, but a right accessible to every individual across the
              nation.
            </motion.p>
          </div>
        </motion.div>

        {/* Key Problem Areas */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
          variants={fadeInUpVariants}
        >
          Addressing Key Challenges
        </motion.h2>

        <motion.div
          className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2"
          variants={staggerContainerVariants}
        >
          {[
            {
              title: "Healthcare Access",
              desc: "Bridging gaps in accessibility across rural and underserved areas, ensuring that even the most remote communities have access to basic healthcare services through our digital platform.",
              icon: "🏥",
            },
            {
              title: "Reducing Mortality",
              desc: "Enabling early diagnosis and rapid response to critical health issues, our AI-powered system helps identify potential risks quickly, significantly reducing preventable deaths across the region.",
              icon: "🩺",
            },
            {
              title: "Clinician Support",
              desc: "By streamlining administrative processes and providing decision support tools, we empower healthcare workers to focus more on patient care, enhancing overall healthcare delivery efficiency.",
              icon: "👨‍⚕️",
            },
            {
              title: "Patient Empowerment",
              desc: "Our user-friendly mobile application provides individuals with the tools and knowledge to manage their health proactively, fostering a culture of preventive care and informed decision-making.",
              icon: "💪",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl flex flex-col sm:flex-row items-center sm:items-start gap-6"
              variants={fadeInUpVariants}
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="text-5xl sm:text-6xl mb-4 sm:mb-0"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                {feature.icon}
              </motion.div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-indigo-700 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-6">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div className="mt-24 text-center" variants={fadeInUpVariants}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Healthcare?
          </h2>
          <motion.button
            onClick={() => {
              window.location.href = "/contact";
            }}
            className="px-8 py-4 bg-indigo-600 text-white text-xl font-semibold rounded-full shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Join Our Mission
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
