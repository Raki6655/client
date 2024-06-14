import React, { useEffect, useState } from "react";
import menuItems from "@/app/Components/Brands/mock/menuItems";
import { ISubList } from "@/app/lib/types/typed";


interface Handler {
	submenuHandler: (props: ISubList) => void;
}

const LeftMenu = ({ submenuHandler }: Handler) => {
	return (
		<div className="w-80  h-full flex flex-col border-r-2 ">
			{menuItems.map((item, index) => (
				<div
					className="flex justify-start text-start px-5 gap-5 mt-10"
					onMouseOver={() =>
						submenuHandler({
							category: item.category,
							index,
							productsGroup: item.productsGroup,
						})
					}
				>
					<item.icon />
					<span className="cursor-pointer">{item.category}</span>
				</div>
			))}
		</div>
	);
};

export default LeftMenu;
