import image1 from "../assets/homePageImg1.jpg";
import image2 from "../assets/homePageImg2.jpg";
import image3 from "../assets/homePageImg3.jpg";
import image4 from "../assets/homePageImg4.jpg";
const Images = () => {
  return (
    <>
      <div>
        <img src={image1} alt={`image1`} className={`w-full h-[90vh]`} />
      </div>
    </>
  );
};

export default Images;
