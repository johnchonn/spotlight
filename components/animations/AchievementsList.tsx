"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementsList = [
  { metric: "Users", value: "850", postfix: "M+" },
  { metric: "Awards", value: "40" },
  { metric: "Years", value: "12" },
  { metric: "Downloads", value: "700", postfix: "M+" },
];

export default function AchievementsList() {
  return (
    <div className="achievements-container">
      <div className="border-[#33353F] border rounded-xl flex flex-row items-center justify-evenly">
        {achievementsList.map((achievement, _id) => (
          <div
            key={_id}
            className="flex flex-col items-center justify-center mx-4 my-4"
          >
            <h2 className="text-[20px] font-bold flex flex-row">
              <AnimatedNumbers
                includeComma
                animateToNumber={parseInt(achievement.value)}
                locale="en-US"
                className="text-[20px] font-bold"
                // configs={(_, index) => {
                //   return {
                //     mass: 1,
                //     friction: 100,
                //     tensions: 140 * (index + 1),
                //   };
                // }}
              />
              {achievement.postfix}
            </h2>
            <p className="achievement-metric">{achievement.metric}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
