import Image from "next/image";
import React from "react";

interface IBrand {
	imgSrc: string;
	brandName: string;
}

const BrandCard = ({ imgSrc, brandName }: IBrand) => {
	return (
		<div className="p-2">
			<Image src={imgSrc} alt={brandName} height={200} width={300} />
		</div>
	);
};

export default BrandCard;
