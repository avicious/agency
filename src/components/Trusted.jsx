import { motion } from "motion/react";
import { company_logos } from "../assets/assets";

const Trusted = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="flex-wrapper text-gray-700 dark:text-white/80"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="font-semibold"
      >
        Trusted by Leading Companies
      </motion.h2>

      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.1 }}
        viewport={{ once: true }}
        className="flex items-center justify-center flex-wrap gap-10 m-4"
      >
        {company_logos.map(({ id, logo }) => (
          <motion.img
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4 }}
            key={id}
            src={logo}
            alt={logo}
            className="max-h-5 sm:max-h-6 dark:drop-shadow-xl"
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Trusted;
