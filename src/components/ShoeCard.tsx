"use client";
import Image from "next/image";

const ShoeCard = ({ imageUrl, changeShoeImage, bigShoeImage }: any) => {
  console.log(imageUrl);
  return (
    <div
      className={`border-2 rounded-xl ${
        bigShoeImage.src === imageUrl.bigShoe.src
          ? "border-coral-red"
          : "border-slate-600"
      } cursor-pointer max-sm:flex-1 bg-primary`}
      onClick={changeShoeImage}
    >
      <div className="flex justify-center items-center bg-cover bg-center sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <Image
          src={imageUrl.thumbnail}
          alt="Shoe Collection"
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
