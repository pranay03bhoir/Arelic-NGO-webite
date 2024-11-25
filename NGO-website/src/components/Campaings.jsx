import image from "../assets/homePageImg3.jpg";
import { motion } from "motion/react";
import Cards from "./Cards.jsx";
import { useEffect, useState } from "react";
const Campaings = () => {
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState({
    start: 0,
    end: 3,
  });
  useEffect(() => {
    fetch("/cardData.json")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  const slicedData = data.slice(currentIndex.start, currentIndex.end);
  console.log(slicedData);
  function handlePrevCard() {
    setCurrentIndex({ start: 3, end: 6 });
  }
  return (
    <>
      <div
        className={`flex items-center justify-center h-80 bg-fixed bg-parallax bg-cover mt-12`}
      >
        <h1 className={`text-6xl text-center underline decoration-amber-500`}>
          OUR RECENT CAMPAIGNS
        </h1>
      </div>

      <div className={`mt-14 text-center flex justify-center gap-20`}>
        <motion.button
          className={` border-2 rounded-lg`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handlePrevCard}
        >
          <i className="fa-solid fa-arrow-left text-2xl p-3 "></i>
        </motion.button>{" "}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className={`border-2 rounded-lg`}
        >
          <i className="fa-solid fa-arrow-right text-2xl p-3"></i>
        </motion.button>
      </div>
      <div
        className={`mt-5 w-full flex flex-col gap-10 px-10 mb-5 md:grid md:grid-cols-2 lg:flex lg:justify-center md:gap-20 duration-300`}
      >
        {slicedData.map((data) => (
          <Cards key={data.id} {...data} />
        ))}
      </div>
    </>
  );
};

export default Campaings;
