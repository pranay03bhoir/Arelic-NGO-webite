import image from "../assets/homePageImg3.jpg";
import { useEffect, useState } from "react";

const Cards = ({
  heading,
  subheading,
  pvalue,
  current,
  goal,
  button1,
  button2,
  image,
}) => {
  return (
    <>
      <div
        className={`border-2 lg:w-[25%] lg:flex flex-col justify-center rounded-lg shadow-2xl`}
      >
        <img
          src={image}
          alt={`image`}
          className={`rounded-lg w-[100%] p-2 object-cover h-[40vh]`}
        />
        <div>
          <h1 className={`w-full text-center text-lg font-bold px-1`}>
            {heading}
          </h1>
          <p className={`text-start font-light mt-2 w-full px-1`}>
            {subheading}
          </p>
        </div>
        <div className={`w-full px-5`}>
          <progress
            className={`h-[5px] w-full`}
            style={{ color: "#f77f00", borderRadius: "5px" }}
            value={pvalue}
            max={`100`}
          ></progress>
          <h1 className={`inline-block animate-pulse`}>{current}</h1>
          <h1 className={`inline-block float-right`}>{goal}</h1>
        </div>
        <hr />
        <div className={`w-full px-5 mt-3 mb-5`}>
          <button className={`border-2 border-black rounded-full p-2`}>
            {button1}
          </button>
          <button className={`float-right bg-green-400 rounded-lg p-3`}>
            {button2}
          </button>
        </div>
      </div>
    </>
  );
};
export default Cards;
