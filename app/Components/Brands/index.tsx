"use client";
import React from "react";
import { brandsList } from "@/app/Components/Brands/mock/Brandlist";
import Image from "next/image";
import BrandCard from "./BrandCard";
import Slider from "react-slick";
import SectionTitle from "../UI/SectionTitle";

const Brands = () => {
	const settings = {
		infinite: true,
		speed: 6000,
		slidesToShow: 8,
		slidesToScroll: 4,
		autoplay: true,
		autoplaySpeed: 8000,
		cssEase: "linear",
		swipeToSlide: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 6,
					slidesToScroll: 3,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
				},
			},
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				},
			},
		],
	};
	return (
		<div className="p-1 mt-4 mb-20 md:my-8 text-center ">
			<SectionTitle title={"popularBrands"} />
			<Slider {...settings}>
				{brandsList.map((brandItem) => {
					return (
						<BrandCard
							key={brandItem.id}
							brandName={brandItem.name}
							imgSrc={brandItem.imgSrc}
						/>
					);
				})}
			</Slider>
		</div>
	);
};

export default Brands;
