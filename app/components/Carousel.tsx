"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image from "next/image";

import Slider from "react-slick";

const Carousel = () => {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    buttons: false,
  };

  const imageFiles: string[] = [
    "imgi_4_1.webp",
    "imgi_5_2.webp",
    "imgi_6_3.webp",
    "imgi_7_4.webp",
    "imgi_8_5.webp",
    "imgi_9_6.webp",
    "imgi_10_7.webp",
    "imgi_11_8.webp",
    "imgi_12_9.webp",
    "imgi_13_10.webp",
    "imgi_14_11.webp",
    "imgi_15_12.webp",
    "imgi_16_13.webp",
    "imgi_17_14.webp",
    "imgi_18_15.webp",
  ];

  return (
    <div className="w-full 2xl:px-100">
      <Slider {...settings}>
        {imageFiles.map((imij) => (
          <div key={imij} className="h-100 md:h-80 xl:h-80 lg:h-60">
            <a href={process.env.NEXT_PUBLIC_AFFLINK}>
              <Image
                src={"/01_Carousel/" + imij}
                width={1920}
                height={1000}
                quality={100}
                style={{ objectFit: "cover" }}
                className="w-full"
                alt="Nav Country"
              />
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
