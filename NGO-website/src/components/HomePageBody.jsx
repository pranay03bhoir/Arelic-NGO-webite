import Images from "./Images.jsx";
import { useState } from "react";
import Mission from "./Mission.jsx";
import Vision from "./Vision.jsx";
import { motion } from "motion/react";
import Campaings from "./Campaings.jsx";
const HomePageBody = () => {
  const [readMore, setReadMore] = useState(false);
  const commonClasses =
    "text-lg mt-[6%] lg:px-[10%] sm:px-[5%] px-5 text-center text-wrap w-full lg:text-2xl";

  function handleReadMore(value) {
    setReadMore(value);
  }
  return (
    <>
      <div className={`w-full flex flex-col justify-center`}>
        <Images />
        <p className={`font-light  ${commonClasses}`}>
          Ubiquepericulis penatibus signiferumque sumo iudicabit te intellegat.
          Wisihabitant fastidii solet aliquet convallis felis hendrerit dolorum
          instructior. Rhoncusadversarium fugit mauris honestatis neglegentur
          mei aliquid prompta ridens populo adipiscing splendide omittam
          suspendisse adversarium metus. Variusreque comprehensam massa velit
          suscipit aenean. Sociisepicuri consetetur suspendisse debet lectus
          pharetra habemus nulla ultricies ipsum fermentum molestie patrioque
          splendide eam.appareat novum lorem lobortis efficitur recteque conubia
          accumsan utinam assueverit numquam veniam maluisset quis sapien
          prodesset ius utroque euismod no.
        </p>
        <br></br>
        <p
          className={`mt-0 font-light  ${!readMore ? `hidden` : `block`}  ${commonClasses} `}
        >
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
          amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
          kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
          amet.
        </p>
      </div>
      <div className={`w-full flex justify-center mt-3`}>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className={`p-2 rounded-md border-0 w-44 text-lg outline-0 bg-gradient-to-r from-green-100 to-green-300 mb-10`}
          onClick={() =>
            !readMore ? handleReadMore(true) : handleReadMore(false)
          }
        >
          {!readMore ? "Read More" : "Read Less"}
        </motion.button>
      </div>
      <Mission />
      <Vision />
      <Campaings />
    </>
  );
};

export default HomePageBody;
