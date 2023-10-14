import Image from "next/image";
import React from "react";

const CustomButton = ({ title, icon }: any) => {
  return (
    <button className="flex justify-center items-center px-7 py-4 gap-2 font-montserrat border text-lg leading-none bg-coral-red rounded-full text-white border-coral-red">
      {title}
      {icon ? (
        <Image className="ml-2 w-5 h-5 rounded-full" src={icon} alt="Icon" />
      ) : null}
    </button>
  );
};

export default CustomButton;
