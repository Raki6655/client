import React from "react";

import Link from "next/link";
import { IDropDown, ISubmenuItems } from "@/app/types/typed";

const SubmenuList = ({ submenuItem }: ISubmenuItems) => {
	console.log(submenuItem);
	return (
		<div className="submenu-list relative  w-3/4 ml-1 max-h-full flex">
			{submenuItem ? (
				submenuItem?.map((item, index) => (
					<div className="flex flex-col w-full h-auto mt-10" key={item.title}>
						<Link href={"/hh"}>
							<span className="drop_category_title relative text-lg font-bold py-1 mb-[10rem]">
								{item.title !== null ? item.title : "nothing"}
							</span>
						</Link>

						{item &&
							item.subtitles.map((sub) => (
								<span className="relative cursor-pointer text-md py-2 hover:text-red-800 transition-color duration-300" key={sub}>
									{sub}
								</span>
							))}
					</div>
				))
			) : (
				<span className="relative my-auto text-lg mx-auto top-[50%]">
					No items to show
				</span>
			)}
		</div>
	);
};

export default SubmenuList;
