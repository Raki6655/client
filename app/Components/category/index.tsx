import React from "react";
import SectionTitle from "../UI/SectionTitle";
import SmallCard from "./SmallCard";
import CategoryLgCard from "./CategoryLgCard";
import DigitalPhoneImg from "../../public/images/category-img/digital-category.webp";
import Image from "next/image";
import RedButton from "../UI/RedButton";
import { categoryLgContent } from "@/app/Components/Brands/mock/categoryLarge";

const CategorySection = () => {
	const title = "Category";
	const children = (
		<>
			<div className="flex flex-col gap-5">
				<span className="text-3xl font-medium">Digital Products</span>
				<span>We offer the newest products at the most competitive prices</span>
				<button className="px-1 py-2 cursor-pointer shadow-sm bg-red-800 w-40 rounded-lg text-white hover:scale-105 duration-200">
					See All Products
				</button>
			</div>
			<Image
				src={DigitalPhoneImg}
				alt="digital_product"
				className="hover:scale-95 duration-200 w-2/5"
			/>
		</>
	);
	const children3 = (
		<div className="flex flex-col h-full gap-5 bg-gray-200">
			<div className="h-[10rem] flex">
				<div className="flex flex-col gap-2">
					<span className="text-xl font-medium">Digital Products</span>
					<span className="text-sm">
						We offer the newest products at the most competitive prices
					</span>
					<button className="px-1 py-1 cursor-pointer shadow-sm bg-red-800 w-24 text-xs rounded-lg text-white hover:scale-105 duration-200">
						See All Products
					</button>
				</div>
				<Image
					src={DigitalPhoneImg}
					alt="digital_product"
					className="hover:scale-95 duration-200 w-1/5 h-2/3"
				/>
			</div>
			<div className="h-[10rem] flex">
				<div className="flex flex-col gap-2">
					<span className="text-xl font-medium">Digital Products</span>
					<span className="text-sm">
						We offer the newest products at the most competitive prices
					</span>
					<RedButton heading="See All Products" />
				</div>
				<Image
					src={DigitalPhoneImg}
					alt="digital_product"
					className="hover:scale-95 duration-200 w-1/5 h-2/3"
				/>
			</div>
		</div>
	);
	return (
		<div className="mx-auto">
			<SectionTitle title={title} />
			<div className="lg:hidden w-full px-10 md:px-20 flex gap-[2rem] flex-wrap ml-auto justify-between mt-10">
				<SmallCard />
				<SmallCard />
				<SmallCard />
				<SmallCard />
				<SmallCard />
				<SmallCard />
				<SmallCard />
			</div>
			{/* <div className="hidden lg:w-full lg:flex gap-2 flex-wrap">
				<CategoryLgCard>{children}</CategoryLgCard>
				<CategoryLgCard>{children}</CategoryLgCard>
				<CategoryLgCard>{children3}</CategoryLgCard>
				<CategoryLgCard>{children}</CategoryLgCard>
				<CategoryLgCard>{children}</CategoryLgCard>
			</div> */}

			<div className="hidden lg:w-full lg:flex lg:gap-10 gap-2 lg:justify-between flex-wrap lg:items-center flex-grow relative ">
				{categoryLgContent.map((item) => (
					<CategoryLgCard item={item} key={item.name} />
				))}
			</div>
		</div>
	);
};

export default CategorySection;
