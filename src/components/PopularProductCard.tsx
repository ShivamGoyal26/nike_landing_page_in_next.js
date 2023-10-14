import { star } from "@/assets/icons";
import Image from "next/image";

const PopularProductCard = ({ imgURL, name, price }: any) => {
  return (
    <div className="w-full flex flex-1 flex-col max-sm:w-full">
      <Image src={imgURL} alt={name} className="w-[280px] h-[280px]" />
      <div className="mt-4 flex justify-start gap-2.5">
        <Image src={star} alt="rating" width={24} height={24} />
        <p className="font-montserrat text-sm leading-normal text-slate-gray">
          (4.5)
        </p>
      </div>
      <h3 className=" text-xl leading-normal font-semibold font-palanquin">
        {name}
      </h3>
      <p className="mt-1 font-semibold font-montserrat text-coral-red text-sm leading-normal">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
