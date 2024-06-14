"use client"
import Image from "next/image";
import React from "react";
import RedButton from "../UI/RedButton";
import Link from "next/link";


interface ICategoryLgCard {
	name: string;
	title: string;
	description: string;
	styles: {
		backgroundColor: string;
		flexDirection: string;
		paddingInline: string;
		paddingBlock: string;
		textAlign?: string;
		gridRow: string;
		gridColumn: string;
	};
	href: string;
	imgSrc: string;
	imgWidth: number;
	imgHeight: number;
}

const CategoryLgCard: React.FC<{
	// children: React.ReactNode;
	item: ICategoryLgCard;
}> = ({ item }) => {
	const styles = {
		background: "yellow",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		flexDirection: "row",
		width: "33%",
		height: "25rem",
	};

	return (
		<Link href={item.href}>
			<div
				className={`px-2 py-16 shadow-lg gap-10 rounded-lg text-gray-800  min-w-[20rem] h-[20rem] relative  flex-grow`}
				style={item.styles as React.CSSProperties}
			>
				<div className="flex w-full justify-between px-10 items-center relative top-1/2 -translate-y-1/2 flex-1">
					<div className="flex flex-col gap-2">
						<span className="text-xl font-medium">{item.title}</span>
						<span className="text-sm">{item.description}</span>
						<RedButton heading="See All Products" />
					</div>
					<Image
						src={item.imgSrc}
						width={item.imgWidth}
						height={item.imgHeight}
						alt="digital_product"
						className="hover:scale-95 duration-200"
					/>
				</div>
			</div>
		</Link>
	);
};

export default CategoryLgCard;
