import Image from "next/image";
import React from "react";

const CustomButton = ({ title, icon }) => {
  return (
    <button className="flex justify-center items-center px-7 py-4 gap-2 font-montserrat border text-lg leading-none bg-coral-red rounded-full text-white border-coral-red">
      {title}
      <Image className="ml-2 w-5 h-5 rounded-full" src={icon} alt="Icon" />
    </button>
  );
};

export default CustomButton;
