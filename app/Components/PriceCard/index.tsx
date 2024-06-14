import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const PriceCard = () => {
	return (
		<div className="w-[13rem] lg:w-[18rem]  shadow-2xl rounded-md p-2 lg:p-5  mt-5 mb-2 lg:mb-0 lg:mt-20 relative left-1/2 -translate-x-1/2">
			<span className="mb-5">Product Price</span>
			<br></br>
			<span className="mt-5 font-extrabold text-xl">$700</span>
			<div className="flex  items-center justify-center gap-5 my-2  lg:my-5">
				<span className="text-xl font-bold">+</span>
				<span className="px-5 py-1 lg;py-4 bg-white">4</span>
				<span className="text-xl font-bold">-</span>
			</div>
			<button className="px-5 py-3 relative left-1/2 -translate-x-1/2 flex items-center justify-center gap-3 bg-red-700 text-white">
				<AiOutlineShoppingCart fontSize={"1.5rem"} /> <span>Add To Cart</span>
			</button>
		</div>
	);
};

export default PriceCard;
