import { link } from "framer-motion/client";
import project1 from "../assets/projects/Ai-ImgEn.jpg";
import project2 from "../assets/projects/minipj.png";
import project3 from "../assets/projects/Musicpf2.png";
import project4 from "../assets/projects/trading.png";

export const HERO_CONTENT = `I’m Shivam Mishra, a B.Tech student at Newton School of Technology with a focus on web development. I work with technologies like React, JavaScript, Tailwind CSS, HTML, and CSS to build clean and responsive user interfaces. Outside of tech, I’m a trained guitarist, vocalist and music producer, bringing creativity and attention to detail into everything I do. I'm currently building real-world projects to strengthen my skills and grow as a developer.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;


export const PROJECTS = [
  {
    title: "AI Image Enhancer",
    image: project1,
    description:
      "An AI-powered tool that enhances image quality using machine learning techniques. Users can upload and enhance their images with just one click.",
    technologies: ["HTML", "CSS", "JavaScript", "React", "API Integration"],
    link: "https://shivam-mishra-music.github.io/ImageEnhencer-AI/",
  },
  {
    title: "MiniProjects Dashboard",
    image: project2,
    description:
      "A dashboard-style website showcasing all my mini web development projects in one place. Each project is neatly categorized and easily accessible.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    link: "https://shivam-mishra-music.github.io/MiniProjects/",
  },
  {
    title: "Musician Portfolio Website",
    image: project3,
    description:
      "A creative portfolio to showcase my musical journey, featuring original compositions, stage performances, guitar certificates, and my extra curricullar.",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
    link: "https://shivammishramusic.netlify.app/",
  },
  {
    title: "Stock Market Analyzer App",
    image: project4,
    description:
      "A platform for analyzing stock market trends and data. The app allows users to track stock prices, view historical data, and make informed investment decisions.",
    technologies: ["HTML", "CSS", "JavaScript", "NodeJs", "TailWind" , "API Integration"],
    link: "",
  }
];

export const CONTACT = {
  address: "NH44, Chowk, Bahalgarh, Sonipat, Haryana 131021",
  phoneNo: "+91 7070522032",
  email: "shivam.mishra2024@nst.rishihood.edu.in",
};
