"use client";
import React from "react";
import Image from "next/image";
import MouseImage from "../../public/images/mouse.png";
import BlurredInfoBox from "./BlurredInfoBox";
import Link from "next/link";
import { IProduct } from "@/app/types/typed";
interface INewItemCard {
	product: IProduct;
}
const NewItemCard: React.FC<INewItemCard> = ({ product }) => {
	return (
		<>
			{product ? (
				// <Link
				// 	href={`${product.category[0]}/${product.category[1]}/${product.category[2]}/${product.name}`}
				// >
				<div className="w-full lg:w-[15rem] h-15rem lg:h-[25rem] shadow-lg rounded-lg pb-10 cursor-pointer  flex  lg:flex-col bg-white/100 ">
					<div className="w-1/2 lg:w-full h-full">
						<div className="relative bg-gray-400 py-0 lg:py-5 h-[170px] lg:h-[200px]">
							<Image
								src={product.image[0]}
								width={200}
								height={200}
								alt="product_image"
								className="w-30 max-h-25 mx-auto lg:w-2/3  duration-300 hover:scale-105 "
							/>
							<BlurredInfoBox product={product} />
						</div>
					</div>
					<div className="relative w-1/2 flex flex-col  gap-3 items-center px-3 lg:w-full ">
						<span className="text-yellow-800 lg:text-2xl my-2 ">*****</span>
						<span className="lg:text-center lg:px-5 min-h-[4rem] max-h-[4rem] overflow-hidden">
							{product.name}
						</span>
						<span className="absolute bottom-0 left-2 font-bold text-lg lg:-bottom-10">
							{product.price}
						</span>
					</div>
				</div>
				// </Link>
			) : (
				<div></div>
			)}
		</>
	);
};

export default NewItemCard;
