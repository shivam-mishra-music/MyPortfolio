import { RiReactjsLine } from "react-icons/ri";
import { SiJavascript, SiPython, SiTailwindcss } from "react-icons/si";
import { FaHtml5, FaCss3Alt, FaNodeJs } from "react-icons/fa";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl"
      >Technologies
      </motion.h2>
      <motion.div 
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -100 }}
      transition={{ duration: 3.2 }}
      className="flex flex-wrap items-center justify-center gap-4">
        <motion.div 
        initial="initial"
        animate="animate"
        variants={iconVariants (2.5)}
        className="p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div 
        initial="initial"
        animate="animate"
        variants={iconVariants (2.7)}
        className="p-4">
          <SiJavascript className="text-7xl text-yellow-400" />
        </motion.div>
        <motion.div 
        initial="initial"
        animate="animate"
        variants={iconVariants (2.2)}
        className="p-4">
          <FaHtml5 className="text-7xl text-orange-500" />
        </motion.div>
        <motion.div 
        initial="initial"
        animate="animate"
        variants={iconVariants (1.9)}
        className="p-4">
          <FaCss3Alt className="text-7xl text-blue-500" />
        </motion.div>
        <motion.div 
        initial="initial"
        animate="animate"
        variants={iconVariants (3.5)}
        className="p-4">
          <FaNodeJs className="text-7xl text-green-600" />
        </motion.div>
        <motion.div 
        initial="initial"
        animate="animate"
        variants={iconVariants (3)}
        className="p-4">
          <SiPython className="text-7xl text-yellow-500" />
        </motion.div>
        <motion.div 
        initial="initial"
        animate="animate"
        variants={iconVariants (5)}
        className="p-4">
          <SiTailwindcss className="text-7xl text-sky-400" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
