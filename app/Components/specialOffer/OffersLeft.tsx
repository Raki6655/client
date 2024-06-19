import Image from "next/image";
import React from "react";
import SpecialBg from "../../../public/images/offersbg.webp";

const OffersLeft = () => {
	return (
		<div className="w-40 px-2 lg:px-5 h-full  lg:w-60 flex flex-col justify-center items-center z-2 gap-5 ">
			<Image
				src={SpecialBg}
				alt="bg_img"
				className="absolute b -z-1 h-20 w-20  lg:w-80 lg:h-80"
			/>
			<span className="mb-10 z-10 text-red-800 font-extrabold ml-auto">
				Special Offers
			</span>
			<button className="bg-white/60 px-5 py-2 rounded-sm  text-red-800 font-semibold w-3/7 z-10 mt-20">
				See All
			</button>
		</div>
	);
};

export default OffersLeft;
