import poor from "../assets/poor.jpg";
const Vision = () => {
  return (
    <>
      <div
        className={`flex items-center justify-center h-80 bg-fixed bg-parallax bg-cover mt-14`}
      >
        <h1 className={`text-6xl text-center underline decoration-amber-500`}>
          OUR VISION
        </h1>
      </div>
      <div className={`grid grid-cols-2`}>
        <img
          src={poor}
          alt={``}
          className={`w-[50%] mt-14 rounded-lg translate-x-32`}
        />
        <h1 className={`text-4xl mt-20 block`}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          <p className={`text-2xl font-light mt-20 px-[2rem]`}>
            fastidii accumsan solet dolor vel menandri tortor platonem
            ullamcorper epicurei tota consequat ei efficiantur aliquid ludus
            reprehendunt aliquet delicata pellentesque rhoncus utinam egestas
            assueverit vivendo auctor aliquid novum dicat eripuit
          </p>
          <ol className={`text-xl text-center mt-5`}>
            <li>
              <i class="fa-regular fa-circle-dot text-amber-400"></i> Lorem
              ipsum dolor sit amet, consetetur
            </li>
            <li>
              <i className="fa-regular fa-circle-dot text-amber-400"></i> Lorem
              ipsum dolor sit amet,
            </li>
            <li>
              <i className="fa-regular fa-circle-dot text-amber-400"></i> Lorem
              ipsum dolor sit amet, consetetur sadipscing
            </li>
          </ol>
        </h1>
      </div>
    </>
  );
};

export default Vision;
