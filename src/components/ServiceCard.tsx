import Image from "next/image";

const ServiceCard = ({ imgURL, label, subtext }: any) => {
  return (
    <div className="flex-1 min-w-[350px] rounded-[20px] shadow-3xl px-10 py-16">
      <div className="h-11 w-11 justify-center items-center bg-coral-red rounded-full flex">
        <Image src={imgURL} alt="ServiceImage" width={24} height={24} />
      </div>
      <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold">
        {label}
      </h3>
      <p className="mt-3 font-montserrat text-lg leading-normal text-slate-gray">
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
