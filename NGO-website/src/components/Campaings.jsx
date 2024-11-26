import { motion } from "motion/react";
import Cards from "./Cards.jsx";
import { useEffect, useState } from "react";
const Campaings = () => {
  const [data, setData] = useState([]);
  const [cardNumber, setCardNumber] = useState(0);
  const cardSize = 3;
  const [currentIndex, setCurrentIndex] = useState([]);
  useEffect(() => {
    fetch("/cardData.json")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setCurrentIndex(data.slice(0, cardSize));
      });
  }, []);

  useEffect(() => {
    const start = cardNumber * cardSize;
    const end = start + cardSize;
    setCurrentIndex(data.slice(start, end));
  }, [cardNumber, data]);

  function handlePrevCard() {
    if (cardNumber > 0) {
      setCardNumber((prev) => prev - 1);
    } else {
      setCardNumber((prev) => prev + 2);
    }
  }

  function handleNextCard() {
    const nextStart = (cardNumber + 1) * cardSize;
    if (nextStart < data.length) {
      setCardNumber((prev) => prev + 1);
    } else {
      setCardNumber((prev) => prev - 2);
    }
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
          onClick={handleNextCard}
        >
          <i className="fa-solid fa-arrow-right text-2xl p-3"></i>
        </motion.button>
      </div>
      <div
        className={`mt-5 w-full lg:flex-row flex flex-col gap-10 px-10 mb-5 md:grid md:grid-cols-2 lg:flex lg:justify-center md:gap-20 duration-300`}
      >
        {currentIndex.map((data) => (
          <Cards key={data.id} {...data} />
        ))}
      </div>
    </>
  );
};

export default Campaings;
