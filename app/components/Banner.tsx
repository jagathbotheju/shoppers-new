"use client";
import Slider from "react-slick";
import {
  bannerImg,
  sliderImgFive,
  sliderImgFour,
  sliderImgThree,
  sliderImgTwo,
  sliderImgOne,
} from "@/public/assets/images/index";
import Image from "next/image";
import BannerText from "./BannerText";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import ButtonPrimary from "./ButtonPrimary";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 9000,
    arrows: false,
    dotClass: 'background-color:"red"',
  };

  return (
    <div className="max-w-7xl mx-auto bg-white">
      <div className="w-full bg-white px-4 pt-6 flex gap-2 border-b-[1px] pb-10">
        {/* SLIDER */}
        <div className="w-2/3 rounded-lg h-[410px] relative shadow-bannerShadow">
          <Slider {...settings}>
            {/* IMAGE ONE */}
            <div className="w-full h-[410px] relative">
              <Image
                className="w-full h-full object-cover rounded-lg"
                src={sliderImgOne}
                alt="slider image five"
                priority
              />
              <BannerText
                title="Spring fashion in bloom"
                description="New trends & styles to turn hands anytime,on any budget"
                btnText="Shop Now"
                className="absolute w-60 h-full top-6 left-4 flex flex-col gap-3 text-white"
              />
            </div>

            {/* IMAGE TWO */}
            <div className="w-full h-[410px] relative">
              <Image
                className="w-full h-full object-cover rounded-lg"
                src={sliderImgTwo}
                alt="slider image five"
                priority
              />
              <BannerText
                title="Spring fashion in bloom"
                description="New trends & styles to turn hands anytime,on any budget"
                btnText="Shop Now"
                className="absolute w-60 h-full top-0 left-4 flex flex-col gap-3 text-white"
              />
            </div>

            {/* IMAGE THREE */}
            <div className="w-full h-[410px] relative">
              <Image
                className="w-full h-full object-cover rounded-lg"
                src={sliderImgThree}
                alt="slider image five"
                priority
              />
              <BannerText
                title="Spring fashion in bloom"
                description="New trends & styles to turn hands anytime,on any budget"
                btnText="Shop Now"
                className="absolute w-60 h-full top-0 left-4 flex flex-col gap-3 text-blue"
              />
            </div>

            {/* IMAGE FOUR */}
            <div className="w-full h-[410px] relative">
              <Image
                className="w-full h-full object-cover rounded-lg"
                src={sliderImgFour}
                alt="slider image five"
                priority
              />
              <BannerText
                title="Spring fashion in bloom"
                description="New trends & styles to turn hands anytime,on any budget"
                btnText="Shop Now"
                className="absolute w-60 h-full top-0 left-4 flex flex-col gap-3 text-gray-600"
              />
            </div>

            {/* IMAGE FIVE */}
            <div className="w-full h-[410px] relative">
              <Image
                className="w-full h-full object-cover rounded-lg"
                src={sliderImgFive}
                alt="slider image five"
                priority
              />
              <BannerText
                title="Spring fashion in bloom"
                description="New trends & styles to turn hands anytime,on any budget"
                btnText="Shop Now"
                className="absolute w-60 h-full top-0 left-4 flex flex-col gap-3 text-gray-600"
              />
            </div>
          </Slider>
        </div>

        {/* FLASH PICK */}
        <div className="w-1/3 border-[1px] border-gray-200 rounded-lg shadow-bannerShadow p-4 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-black">
              Flash Pick of the Day
            </h2>
            <p className="text-base text-zinc-600 underline underline-offset-2">
              View all
            </p>
          </div>
          <Image
            className="h-60 object-cover rounded"
            src={bannerImg}
            alt="flash sale"
          />
          <ButtonPrimary btnText="Options" />
          <p className="text-lg text-black font-semibold">$199.00</p>
          <p className="text-gray-500 -mt-1 text-sm">
            Unomepro TV Stand Cabinet for Living Room...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
