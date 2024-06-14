"use client";
import React from "react";
import OffersLeft from "./OffersLeft";
import OffersCarausel from "./OffersCarausel";
import Slider from "react-slick";
import { NextArrow, PrevArrow } from "../carausel/Arrows";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IProduct } from "@/app/types/typed";
interface ISpecialOffer {
	products: IProduct[];
}
const SpecialOffers: React.FC<ISpecialOffer> = ({ products }) => {
	let full = true;
	const settings = {
		// className: ` px-4 ${full ? "bg-palette-fill" : "bg-[#37bccef9]"}`,
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		cssEase: "linear",
		nextArrow: <NextArrow to="next" />,
		prevArrow: <PrevArrow to="prev" />,
		appendDots: (dots: string) => (
			<div className="bg-transparent !pb-[40px]">
				<ul> {dots} </ul>
			</div>
		),
	};

	return (
		<div className="w-full px-2 lg:px-5 py-2 lg:py-5 bg-blue-300  my-10 flex gap-3 lg:gap-10 flex-grow overflow-x-hidden items-center">
			<OffersLeft />

			<OffersCarausel data={products} />

			{/* <div className="">
				<div className="absolute top-[45%] right-4 md:right-1 shadow-lg rounded-full bg-palette-card p-1 drop-shadow-lg text-[0.8rem] md:text-[1.8rem]">
					<HiOutlineChevronRight style={{ color: "gray" }} />
				</div>
				<div className="absolute top-[45%] left-4 md:-left-1 shadow-lg rounded-full bg-palette-card p-1 drop-shadow-lg text-[0.8rem] md:text-[1.8rem]">
					<HiOutlineChevronLeft style={{ color: "gray" }} />
				</div>
			</div> */}
		</div>
	);
};

export default SpecialOffers;
