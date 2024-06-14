import { extraMenu } from "@/app/Components/Brands/mock/menuItems";
import Link from "next/link";
import React from "react";

const HotDeals = () => {
	return (
		<div className="my-10 w-full  px-5">
			{extraMenu.map((item, index) => (
				<div className="flex mt-4 text-palette-mute gap-5 items-center text-gray-500 text-lg" key={item.title}>
					<item.icon />
					<Link href={`/${item.href}`}>
						<span>{item.title}</span>
					</Link>
				</div>
			))}
		</div>
	);
};

export default HotDeals;
