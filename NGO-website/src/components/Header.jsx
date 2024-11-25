import NavBar from "./NavBar.jsx";
import { motion, useScroll } from "motion/react";

const Header = () => {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.progress
        className={`fixed h-[15px] top-0 left-0 right-0 origin-left w-full`}
        style={{ scaleX: scrollYProgress }}
      ></motion.progress>
      <div className={`mt-10 shadow-lg`}>
        <NavBar />
      </div>
    </>
  );
};

export default Header;
