"use client";

import { TypeAnimation } from "react-type-animation";

export default function AnimationText() {
  return (
    <TypeAnimation
      sequence={[
        "SPOTLIGHT",
        1000,
        "ChatApp",
        1000,
        "Creativity",
        1000,
        "Innovation",
        1000,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
  );
}
