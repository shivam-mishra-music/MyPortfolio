import { FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img src={logo} className="mx-2" width={50} height={33} alt="Logo" />
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2x1">
        <a
          href="https://www.linkedin.com/in/shivam-mishra-7b0b33323/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/shivam-mishra-music"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/shivam_mishramusic/profilecard/?igsh=a2s5a29jMDkwMGc="
          target="_blank"
          rel="noopener noreferrer"
          aria-label="InstaGram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.youtube.com/@shivam_mishramusic"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
        >
          <FaYoutube />
        </a>
      </div>
    </nav>
  );
};
export default Navbar;
