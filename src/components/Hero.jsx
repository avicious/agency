import { motion } from "motion/react";
import assets from "../assets/assets.js";

const Hero = () => {
  return (
    <div
      id="hero"
      className="flex-wrapper py-20 text-center w-full overflow-hidden text-gray-700 dark:text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        viewport={{ once: true }}
        className="inline-flex items-center gap-2 border border-gray-300 p-1.5 pr-4 rounded-full"
      >
        <img className="w-20" src={assets.group_profile} alt="group profile" />
        <p className="text-xs font-medium">Trusted by 5k+ people</p>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium xl:leading-23.75 max-w-5xl"
      >
        Evolving Bold Ideas into{" "}
        <span className="bg-linear-to-r from-primary via-cyan-500 to-[#4d8cea] bg-clip-text text-transparent">
          Digital
        </span>{" "}
        Influence.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        viewport={{ once: true }}
        className="text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75 max-w-4/5 sm:max-w-lg pb-3"
      >
        Creating meaningful connections and turning big ideas into interactive
        digital experiences.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 2 }}
        viewport={{ once: true }}
        className="relative"
      >
        <img
          className="w-full max-w-6xl rounded-4xl"
          src={assets.hero_img}
          alt="two people looking at a laptop"
        />
        <img
          className="absolute -top-40 -right-40 sm:-top-100 sm:-right-70 -z-1 dark:hidden select-none pointer-events-none"
          src={assets.bgImage1}
          alt="gradient"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
