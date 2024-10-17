"use client";
import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { TabsContent, TabsList, TabsTrigger, Tabs } from "@/components/ui/tabs";
import {
  Smartphone,
  Users,
  Server,
  Shield,
  Clock,
  Stethoscope,
  Heart,
  Clipboard,
} from "lucide-react";

const MotionCard = motion(Card);

export default function Features() {
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

  const features = [
    {
      title: "AI-Powered Triage",
      description:
        "Utilize advanced AI algorithms to quickly assess patient conditions and prioritize care.",
      icon: <Stethoscope className="w-8 h-8 text-indigo-600" />,
      type: "all",
    },
    {
      title: "Real-time Updates",
      description:
        "Receive instant notifications and updates on patient status and facility capacity.",
      icon: <Clock className="w-8 h-8 text-indigo-600" />,
      type: "all",
    },
    {
      title: "Secure Data Handling",
      description:
        "Ensure patient data privacy and security with state-of-the-art encryption and compliance measures.",
      icon: <Shield className="w-8 h-8 text-indigo-600" />,
      type: "all",
    },
    {
      title: "Multi-platform Support",
      description:
        "Access Triage seamlessly across various devices and operating systems.",
      icon: <Smartphone className="w-8 h-8 text-indigo-600" />,
      type: "all",
    },
    {
      title: "Collaborative Care",
      description:
        "Enable seamless communication and collaboration between healthcare professionals.",
      icon: <Users className="w-8 h-8 text-indigo-600" />,
      type: "clinician",
    },
    {
      title: "Scalable Infrastructure",
      description:
        "Built on robust cloud infrastructure to handle growing demands and ensure reliability.",
      icon: <Server className="w-8 h-8 text-indigo-600" />,
      type: "all",
    },
    {
      title: "Symptom Checker",
      description:
        "Easily input and track your symptoms for accurate triage assessment.",
      icon: <Heart className="w-8 h-8 text-indigo-600" />,
      type: "patient",
    },
    {
      title: "Patient History",
      description:
        "Access and manage your medical history securely within the app.",
      icon: <Clipboard className="w-8 h-8 text-indigo-600" />,
      type: "patient",
    },
  ];

  const renderFeatures = (featureType: string) => (
    <motion.div
      className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
      variants={staggerContainerVariants}
    >
      {features
        .filter((feature) =>
          featureType === "all" ? true : feature.type === featureType
        )
        .map((feature, index) => (
          <MotionCard
            key={index}
            className="bg-white bg-opacity-80 backdrop-blur-lg shadow-lg rounded-2xl transition-all duration-300 hover:shadow-2xl"
            variants={fadeInUpVariants}
            whileHover={{ y: -5 }}
          >
            <CardHeader>
              <motion.div
                className="flex items-center space-x-4"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                {feature.icon}
                <h3 className="text-2xl font-bold text-indigo-800">
                  {feature.title}
                </h3>
              </motion.div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{feature.description}</p>
            </CardContent>
          </MotionCard>
        ))}
    </motion.div>
  );

  return (
    <motion.section
      className="bg-gradient-to-t from-blue-50 via-white to-indigo-100 min-h-screen py-16 overflow-hidden"
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
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold text-indigo-900 text-center mb-16"
          style={{ opacity: titleOpacity, scale: titleScale }}
        >
          Triage <span className="text-indigo-600">Features</span>
        </motion.h1>

        <Tabs defaultValue="all" className="mb-12">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger
              value="all"
              className="bg-indigo-600 text-white hover:bg-indigo-700 transition-colors duration-300"
            >
              All Features
            </TabsTrigger>
            <TabsTrigger
              value="patient"
              className="bg-indigo-600 text-white hover:bg-indigo-700 transition-colors duration-300"
            >
              Patient App
            </TabsTrigger>
            <TabsTrigger
              value="clinician"
              className="bg-indigo-600 text-white hover:bg-indigo-700 transition-colors duration-300"
            >
              Clinician App
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all">{renderFeatures("all")}</TabsContent>

          <TabsContent value="patient">{renderFeatures("patient")}</TabsContent>

          <TabsContent value="clinician">
            {renderFeatures("clinician")}
          </TabsContent>
        </Tabs>

        <motion.div className="text-center mt-16" variants={fadeInUpVariants}>
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-6">
            Ready to revolutionize emergency care?
          </h2>
          <motion.button
            onClick={() => {
              window.location.href = "/contact";
            }}
            className="px-8 py-4 bg-indigo-600 text-white text-xl font-semibold rounded-full shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started with Triage
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
