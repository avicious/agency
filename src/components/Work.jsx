import { motion } from "motion/react";
import Title from "./Title";
import { workData } from "../assets/assets";

const Work = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
      id="work"
      className="flex-wrapper pt-30 text-gray-700 dark:text-white"
    >
      <Title
        title="Our Latest Work"
        content="From strategy to execution, we craft digital solutions that move your business forward."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {workData.map((work, index) => (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            key={work.id}
            className="hover:scale-102 duration-500 transition-all cursor-pointer"
          >
            <img
              src={work.image}
              alt={work.title}
              className="w-full rounded-xl"
            />

            <h3 className="mt-3 mb-2 text-lg font-semibold">{work.title}</h3>
            <p className="text-sm opacity-60 w-5/6">{work.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Work;
