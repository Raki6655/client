"use client";
import menuItems from "@/app/Components/Brands/mock/menuItems";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import React from "react";

const ProductSubList = () => {
	let router = useRouter();
	let path = usePathname();
	let category = path.slice(1);

	let allP = menuItems.filter(
		(item) => item.category.toUpperCase() === category.toUpperCase()
	);

	let subList: any = allP[0]?.productsGroup?.map((item) => item);
	const handleRoute = (subCat: string) => {
		router.push(`${category}/${subCat}`);
	};

	return (
		<div className="w-full lg:mx-auto flex justify-center gap-5 items-center mb-10 ">
			{subList?.map((item: any) => (
				<span
					className=" px-5 py-3 lg:py-5 shadow-lg text-sm font-semibold text-center bg-white rounded-md  min-h-16 max-h-16 "
					onClick={() => handleRoute(item.subName)}
				>
					{item.title}
				</span>
			))}
		</div>
	);
};

export default ProductSubList;
