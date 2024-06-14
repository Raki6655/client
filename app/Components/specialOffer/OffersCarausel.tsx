"use client";
import React, { useEffect, useState } from "react";
import JBLImage from "../../public/images/jbl.png";
import Image from "next/image";
import PriceInfo from "./PriceInfo";
import Slider from "react-slick";
import { NextArrow, PrevArrow } from "./SliderArrows";
import { HiOutlineChevronRight, HiOutlineChevronLeft } from "react-icons/hi";
import RedDiscount from "../../public/images/discount.webp";
import { IProduct } from "@/app/lib/types/typed";
import axios from "axios";
import Link from "next/link";
interface ISpecialOffer
{
	data: IProduct[];
}
const OffersCarausel: React.FC<ISpecialOffer> = ({ data }) =>
{
	// let [product, setProduct] = useState([]);
	// const getData = async () => {
	// 	let data = await axios.get("http://localhost:5000/api/get-all-posts");
	// 	setProduct(await data.data);
	// };

	// useEffect(() => {
	// 	getData();
	// }, []);
	const full = true;

	const settings = {
		// className: ` px-4 ${full ? "bg-palette-fill" : "bg-[#37bccef9]"}`,
		infinite: true,
		speed: 600,
		centerPadding: "20px",
		slidesToShow: 5,
		slidesToScroll: 5,
		// initialSlide: 0,
		swipeToSlide: true,
		// rtl: true,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		responsive: [
			{
				breakpoint: 1324,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
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
		<div className="relative w-[55%] lg:w-[85%] ">
			<Slider {...settings}>
				{data.map((item: IProduct) => (
					<Link
						href={`${item.category[0]}/${item.category[1]}/${item.category[2]}/${item}`}
					>
						<div className="h-60 lg:h-80 relative w-40  bg-blue-100 flex-1 lg:flex-initial lg:w-60 rounded-md cursor-pointer py-5 px-2 my-0 lg:my-5">
							<Image
								src={item.image[0]}
								alt="jbl_image"
								height={100}
								width={100}
								className="w-20 mx-auto h-20 lg:h-40 lg:w-40 hover:scale-110 transition-all duration-300 max-h-40 min-h-40 object-contain"
							/>
							{item.discount && (
								<Image
									src={RedDiscount}
									alt="discount"
									width={40}
									className="absolute -right-2 -top-2 z-100"
								/>
							)}
							<PriceInfo product={item} />
						</div>
					</Link>
				))}
			</Slider>
		</div>
	);
};

export default OffersCarausel;
