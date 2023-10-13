import { arrowRight } from "@/assets/icons";
import CustomButton from "@/components/CustomButton";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full border-2 border-red-500 p-2 flex flex-col xl:flex-row justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start max-xl:padding-x  pt-28  bg-slate-600">
        <p>Our Summer Collection</p>
        <h1>
          <span>The New Arrival</span>
          <br />
          <span>Nike</span>
          Shoes
        </h1>
        <p>
          Discover stylish Nike arrivals, quality comfort, and innovation for
          active life.
        </p>
        <CustomButton title={"shop now"} icon={arrowRight} />
      </div>
    </section>
  );
};

export default Hero;
