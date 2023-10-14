"use client";
import { arrowRight } from "@/assets/icons";
import { bigShoe1 } from "@/assets/images";
import CustomButton from "@/components/CustomButton";
import ShoeCard from "@/components/ShoeCard";
import { shoes, statistics } from "@/constants";
import Image from "next/image";
import { useState } from "react";

const Hero = () => {
  const [shoe, setShoe] = useState(bigShoe1);
  return (
    <section
      id="home"
      className="w-full flex flex-col xl:flex-row justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start max-xl:padding-x pt-28 pl-6">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer Collection
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72-px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          active life.
        </p>
        <CustomButton title={"shop now"} icon={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat) => {
            return (
              <div key={stat.label}>
                <p className="text-4xl font-palanquin font-bold">
                  {stat.value}
                </p>
                <p className="leading-7 font-montserrat text-slate-gray">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex-1 relative flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary">
        <Image
          src={shoe}
          alt="shoe collection"
          width={600}
          height={500}
          className="relative z-10 object-contain"
        />
        <div className="flex sm:gap-6 gap-4 absolute z-10 -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe: any, index) => (
            <div key={index}>
              <ShoeCard
                imageUrl={shoe}
                changeShoeImage={() => {
                  setShoe(shoe.bigShoe);
                }}
                bigShoeImage={shoe}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
