"use client";
import React from "react";
// import BeautyBanner from "../../public/images/slider-img/beauty-banner.webp";

import BeautyBanner1 from "../../public/images/slider-img/beauty-banner.webp";
import BeautyBanner2 from "../../public/images/slider-img/digital-banner.webp";
import BeautyBanner3 from "../../public/images/slider-img/fashion-banner.webp";
import BeautyBanner4 from "../../public/images/slider-img/house-banner.webp";
import BeautyBanner5 from "../../public/images/slider-img/stationery-banner.webp";
import BeautyBanner6 from "../../public/images/slider-img/toy-banner.webp";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { NextArrowV1, PrevArrowV1 } from "./ArrowV1";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

const index = () => {
	const settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		cssEase: "linear",
		nextArrow: <NextArrowV1 to="next" />,
		prevArrow: <PrevArrowV1 to="prev" />,
		appendDots: (dots: string) => (
			<div className="bg-transparent !pb-[40px] h-f">
				<ul> {dots} </ul>
			</div>
		),
		responsive: [
			{
				breakpoint: 1324,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<>
			<Slider {...settings}>
				<div className="slider-item relative z-9 left-3">
					<div
						className={`relative w-[100%] h-[50vh] md:h-[70vh] bg-cover bg-center bg-no-repeat`}
						style={{ backgroundImage: `url(${BeautyBanner6.src})` }}
					>
						<div className="absolute bottom-0 md:bottom-1/3 md:translate-y-1/3 left-1/2 -translate-x-1/2 w-full  md:w-3/5 flex flex-col gap-2 md:gap-4 p-2 md:p-4 md:px-5 lg:px-8 justify-center h-1/4 mx-auto glass_card text-black">
							<h2 className="font-semibold">Beauty and Comfort</h2>
							<p>
								Lorem ipsum, dolor sit ut, labore in perspiciatis doloremque
								assumenda nemo.
							</p>
						</div>
					</div>
				</div>
				<div className="slider-item relative z-9">
					<div
						className={`relative w-[100%] h-[50vh] md:h-[70vh] bg-cover bg-center bg-no-repeat`}
						style={{ backgroundImage: `url(${BeautyBanner2.src})` }}
					>
						<div className="absolute bottom-0 md:bottom-1/3 md:translate-y-1/3 left-1/2 -translate-x-1/2 w-full  md:w-3/5 flex flex-col gap-2 md:gap-4 p-2 md:p-4 md:px-5 lg:px-8 justify-center h-1/4 mx-auto glass_card text-black">
							<h2 className="font-semibold">Beauty and Comfort</h2>
							<p>
								Lorem ipsum, dolor sit ut, labore in perspiciatis doloremque
								assumenda nemo.
							</p>
						</div>
					</div>
				</div>
				<div className="slider-item relative z-9">
					<div
						className={`relative w-[100%] h-[50vh] md:h-[70vh] bg-cover bg-center bg-no-repeat`}
						style={{ backgroundImage: `url(${BeautyBanner3.src})` }}
					>
						<div className="absolute bottom-0 md:bottom-1/3 md:translate-y-1/3 left-1/2 -translate-x-1/2 w-full  md:w-3/5 flex flex-col gap-2 md:gap-4 p-2 md:p-4 md:px-5 lg:px-8 justify-center h-1/4 mx-auto glass_card text-black">
							<h2 className="font-semibold">Beauty and Comfort</h2>
							<p>
								Lorem ipsum, dolor sit ut, labore in perspiciatis doloremque
								assumenda nemo.
							</p>
						</div>
					</div>
				</div>
				<div className="slider-item relative z-9">
					<div
						className={`relative w-[100%] h-[50vh] md:h-[70vh] bg-cover bg-center bg-no-repeat`}
						style={{ backgroundImage: `url(${BeautyBanner4.src})` }}
					>
						<div className="absolute bottom-0 md:bottom-1/3 md:translate-y-1/3 left-1/2 -translate-x-1/2 w-full  md:w-3/5 flex flex-col gap-2 md:gap-4 p-2 md:p-4 md:px-5 lg:px-8 justify-center h-1/4 mx-auto glass_card text-black">
							<h2 className="font-semibold">Beauty and Comfort</h2>
							<p>
								Lorem ipsum, dolor sit ut, labore in perspiciatis doloremque
								assumenda nemo.
							</p>
						</div>
					</div>
				</div>
				<div className="slider-item relative z-9">
					<div
						className={`relative w-[100%] h-[50vh] md:h-[70vh] bg-cover bg-center bg-no-repeat`}
						style={{ backgroundImage: `url(${BeautyBanner5.src})` }}
					>
						<div className="absolute bottom-0 md:bottom-1/3 md:translate-y-1/3 left-1/2 -translate-x-1/2 w-full  md:w-3/5 flex flex-col gap-2 md:gap-4 p-2 md:p-4 md:px-5 lg:px-8 justify-center h-1/4 mx-auto glass_card text-black">
							<h2 className="font-semibold">Beauty and Comfort</h2>
							<p>
								Lorem ipsum, dolor sit ut, labore in perspiciatis doloremque
								assumenda nemo.
							</p>
						</div>
					</div>
				</div>
				<div className="slider-item relative z-9">
					<div
						className={`relative w-[100%] h-[50vh] md:h-[70vh] bg-cover bg-center bg-no-repeat`}
						style={{ backgroundImage: `url(${BeautyBanner1.src})` }}
					>
						<div className="absolute bottom-0 md:bottom-1/3 md:translate-y-1/3 left-1/2 -translate-x-1/2 w-full  md:w-3/5 flex flex-col gap-2 md:gap-4 p-2 md:p-4 md:px-5 lg:px-8 justify-center h-1/4 mx-auto glass_card text-black">
							<h2 className="font-semibold">Beauty and Comfort</h2>
							<p>
								Lorem ipsum, dolor sit ut, labore in perspiciatis doloremque
								assumenda nemo.
							</p>
						</div>
					</div>
				</div>
			</Slider>
			<>
				<div className="absolute top-1/2 right-4 md:right-3 lg:right-8 shadow-lg rounded-full bg-palette-card/80 p-1 drop-shadow-lg text-[0.8rem] md:text-[1.8rem]">
					<HiOutlineChevronRight />
				</div>
				<div className="absolute top-1/2 left-4  md:left-3 lg:left-8 shadow-lg rounded-full bg-palette-card/80 p-1 drop-shadow-lg text-[0.8rem] md:text-[1.8rem]">
					<HiOutlineChevronLeft />
				</div>
			</>
		</>
	);
};

export default index;
