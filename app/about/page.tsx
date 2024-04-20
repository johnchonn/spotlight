"use client";

import AnimationText from "@/components/animations/AnimationText";
import AchievementsList from "@/components/animations/AchievementsList";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div>
      <div className="flex flex-col justify-center">
        <motion.div
          className="flex flex-col mt-[80px]"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <span className="text-[60px] font-bold ml-[15px]">Hello, we are</span>
          <span className="animation-text ml-[15px]">
            <AnimationText />
          </span>
        </motion.div>
        <span className="introduction">
          Spotlight is a fun little chat application created for friends and
          family. Our aim is to provide an application that caters to a friendly
          user interface with a fresh minimalistic design for easy
          consumability. We hope you enjoy your experience with us!
        </span>
        <AchievementsList />
      </div>
    </div>
  );
}
