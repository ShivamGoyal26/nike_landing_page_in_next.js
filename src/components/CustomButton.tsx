import Image from "next/image";
import React from "react";

const CustomButton = ({ title, icon }) => {
  return (
    <button className="flex">
      {title}
      <Image className="ml-2 w-5 h-5 rounded-full" src={icon} alt="Icon" />
    </button>
  );
};

export default CustomButton;
