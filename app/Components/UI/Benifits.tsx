import React from "react";
import ExpressDeliveryImage from "../../public/images/benefit-icons/005-delivery-truck-2.webp";
import CashOnDeliveryImage from "../../public/images/benefit-icons/003-cash-on-delivery.webp";
import HeadPhoneImage from "../../public/images/benefit-icons/004-headphones.webp";
import BestSellerImage from "../../public/images/benefit-icons/006-best-seller.webp";
import Image from "next/image";
const benifitData = [
	{
		title: "Express Delivery",
		img: ExpressDeliveryImage,
	},
	{
		title: "Payment on the spot",
		img: CashOnDeliveryImage,
	},
	{
		title: "24/7 Support",
		img: HeadPhoneImage,
	},
	{
		title: "Guarantee the originality",
		img: BestSellerImage,
	},
];
interface myProps {
	benifitData?: { title: string; img: string }[];
}
const Benifits = (props: myProps) => {
	return (
		<div className="w-full my-4  py-3 flex flex-wrap justify-between">
			{benifitData.map((item) => (
				<div className="px-10 gap-2 w-1/2 flex justify-center py-5 flex-col items-center lg:w-1/4">
					<Image src={item.img} alt="logo" width={50} height={25} />
					<span>{item.title}</span>
				</div>
			))}
		</div>
	);
};

export default Benifits;
