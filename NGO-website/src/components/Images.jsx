import image1 from "../../public/images/homePageImg1.jpg";
import image2 from "../../public/images/homePageImg2.jpg";
import image3 from "../../public/images/homePageImg3.jpg";
import image4 from "../../public/images/homePageImg4.jpg";
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
