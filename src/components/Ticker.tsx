import { motion } from "motion/react";
import { skills } from "../data";

export default function Ticker() {
  // Duplicate skills to ensure smooth infinite scrolling
  const repeatedSkills = [...skills, ...skills, ...skills, ...skills];

  return (
    <div className="w-full overflow-hidden bg-black py-8 border-y-4 border-[#E4FF60]">
      <div className="flex w-fit">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 25,
          }}
          className="flex whitespace-nowrap items-center"
        >
          {repeatedSkills.map((skill, index) => (
            <div key={index} className="flex items-center">
              <span className="text-3xl md:text-5xl font-black uppercase text-white tracking-widest px-8">
                {skill}
              </span>
              <span className="text-[#EA5DA3] text-4xl">✦</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
