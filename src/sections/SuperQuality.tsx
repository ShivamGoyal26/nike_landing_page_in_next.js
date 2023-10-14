import { arrowRight } from "@/assets/icons";
import { shoe8 } from "@/assets/images";
import CustomButton from "@/components/CustomButton";
import Image from "next/image";
import React from "react";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We provide you
          <br />
          <span className="text-coral-red">Super</span>{" "}
          <span className="text-coral-red">Quality</span> Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Lorem ipsum is pseudo-Latin text that doesn't have a coherent meaning.
          It's used to emphasize design elements over content. The primary
          purpose of Lorem ipsum is to create text that doesn't distract.
        </p>

        <p className="mt-6 lg:max-w-lg info-text">
          Lorem ipsum is pseudo-Latin text that doesn't have a coherent meaning.
          It's used to emphasize design elements.
        </p>
        <div className="mt-8">
          <CustomButton title={"View details"} />
        </div>
      </div>

      <div className="flex flex-1 justify-center items-center">
        <Image
          src={shoe8}
          alt="shoe8"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
