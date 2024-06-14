import React from "react";
import Image from "next/image";
import DigitalImage from "../../public/images/category-icon/digital-category.webp";

const SmallCard = () => {
	return (
		<div className="py-1 lg:py-2 shadow-md bg-white w-20 lg:w-40 flex flex-wrap justify-center lg:flex-col items-center gap-2 lg:gap-5 text-sm rounded-md mx-auto hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer">
			<Image src={DigitalImage} alt="digital_category" width={50} />
			<span className="mx-auto">Gigital Products</span>
		</div>
	);
};

export default SmallCard;
