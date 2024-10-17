"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const teamMembers = [
  {
    name: "Mohamed Allieu Bockarie",
    title: "Product Lead",
    image: "/mohamed.jpg",
    description: "Medical Student",
  },
  {
    name: "Emmanuel Keifala",
    title: "Technical Lead",
    image: "/emmanuel.png",
    description: "Pharmacy Student",
  },
  {
    name: "Eustace Gaima",
    title: "Media Lead",
    image: "/e.png",
    description: "Medical Student",
  },
  {
    name: "Joseph David Koroma",
    title: "Founder & Operation Lead",
    image: "/joseph.png",
    description: "Medical Student",
  },
];

export default function Team() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleMemberClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-t  from-indigo-300 to-white  py-16 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-5xl md:text-6xl font-extrabold text-indigo-800 text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          The Visionaries Behind Triage
        </motion.h2>

        <div className="relative">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className={`bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 ${
                  activeIndex === index ? "scale-105 z-10" : "hover:scale-102"
                }`}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileHover={{ y: -5 }}
                onClick={() => handleMemberClick(index)}
              >
                <div className="relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={256}
                    className="w-full h-64 object-cover"
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-indigo-900 via-indigo-900/70 to-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 p-6 text-white"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                  >
                    <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                    <p className="text-indigo-200 font-medium">
                      {member.title}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="absolute -top-10 -left-10 -right-10 -bottom-10 bg-indigo-300 rounded-3xl -z-10"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </div>
      </div>
    </section>
  );
}
