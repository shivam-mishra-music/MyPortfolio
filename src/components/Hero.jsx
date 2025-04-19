import profilePic from "../assets/Profile2.jpg";
import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion"
const containerVariants = {
hidden: { opacity: 0, x: -100 },
visible: {
opacity: 1,
x: 0,
transition: {
duration: 0.5,
staggerChildren: 0.5,
}
}
}
const childVariants = {
hidden: { opacity: 0, x: -100 },
visible: { opacity: 1, x: 0, transition: { duration: 0.5 }}
}



const Hero = () => {
  return (
    <div className="pb-4 lg: mb-36">
      <div className="flex flex-wrap lg: flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8">
            <div className="bg-gradient-to-r from-gray-800 to-yellow-400  p-[0.5px] rounded-full">
              <div className="bg-black rounded-full p-[2px]">
                <motion.img
                  src={profilePic}
                  alt="Shivam Mishra"
                  className="rounded-full object-cover"
                  width={650}
                  height={650}
                  initial={{x:100, opacity:0 }}
                  animate={{x:0, opacity:1}}
                  transition={{duration:1, delay:1.5}}/>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants} 
            className="flex flex-col items-center lg:items-start mt-10">
            <motion.h2 
            variants={childVariants}
            className="pb-2 text-4xl tracking-tighter lg:text-8x1">
              Shivam Mishra
            </motion.h2>
            <motion.span 
            variants={childVariants}
            className="bg-gradient-to-r from-yellow-200 to-stone-500 bg-clip-text text-3xl tracking-tight text-transparent">
              Developer Port-Folio
            </motion.span>
            <motion.p 
            variants={childVariants}
            className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter">
              {HERO_CONTENT}
            </motion.p>
            <motion.a
            variants={childVariants}
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="bg-white rounded-full p-4 text-sm text-stone-800 mb-10"
            >
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
