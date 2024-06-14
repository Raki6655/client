import { IProduct } from "@/app/lib/types/typed";
import Image from "next/image";
import React from "react";
import PriceCard from "../PriceCard";
interface ISignleProduct {
	product: any;
}

const SingleProduct: React.FC<ISignleProduct> = ({ product }) => {
	console.log(product);
	let keyy = Object.keys(product[0].details).map((key) => {
		const value = Array.isArray(product[0].details![key])
			? [...product[0].details![key].join("-")]
			: product[0].details![key];

		return value;
	});
	let mapped = Object.keys(product[0].details).map((item) => {
		const detailsVal = Array.isArray(product[0].details[item])
			? product[0].details[item].join("-")
			: product[0].details[item] == true
			? (product[0].details[item] = "Yes")
			: product[0].details[item] == false
			? (product[0].details[item] = "no")
			: product[0].details[item];
		return detailsVal;
	});
	console.log(mapped);
	return (
		<>
			{product[0] && (
				<div className="mt-10 w-full flex flex-col lg:flex-row gap-2 h-full">
					<div className="w-full lg:w-1/4  bg-white ">
						<Image
							src={product[0].image[0]}
							alt="single image"
							height={300}
							width={600}
						/>
						<div className="flex w-full justify-between mt-5 lg:mt-20">
							{product[0].image.map((item: string) => (
								<Image
									src={product[0].image[0]}
									alt="single image"
									height={50}
									width={100}
								/>
							))}
						</div>
					</div>
					<div className="w-full lg:w-2/4 lg:ml-10 ">
						<span className="mb-5 text-gray-700 font-semibold">
							{product[0].name}
						</span>
						<hr className=" my-2 lg:my-5" />
						<h3 className=" font-medium text-md mb-1 lg:mb-5 h-10">Product Details</h3>
						{Object.keys(product[0].details).map((item) => {
							const detailsVal = Array.isArray(product[0].details[item])
								? product[0].details[item].join("-")
								: product[0].details[item] == true
								? (product[0].details[item] = "Yes")
								: product[0].details[item] == false
								? (product[0].details[item] = "no")
								: product[0].details[item];
							return (
								<div className="flex gap-2 lg:gap-10 mb-3" key={product[0].id}>
									<div className=" min-w-[8rem] h-[2.5rem] lg:w-1/4  bg-gray-300 flex items-center"><span className="text-gray-600  font-semibold ">{item}:</span></div>

									<span className="flex-grow text-xs lg:text-sm">{detailsVal}</span>
								</div>
							);
						})}
					</div>
					<div className="w-full lg:w-1/4   ">
						<PriceCard />
					</div>
				</div>
			)}
		</>
	);
};

export default SingleProduct;
