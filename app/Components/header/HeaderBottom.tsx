import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GoSearch } from "react-icons/go";
import { BiLogOut } from "react-icons/bi";
import RightView from "./views/RightView";
import LeftView from "./views/LeftView";

const HeaderBottom = () => {
	return (
		<div className="bottom_list flex w-full items-center justify-between my-5 ">
			<div className="flex-grow w-3/5 flex gap-4 py-2 lg:py-3 px-4 items-center bg-slate-600/10 md:hidden">
				<GoSearch />
				<input
					className="bg-transparent text-black/60 outline-none "
					placeholder="Enter something "
				/>
			</div>
			<div className="md:hidden mr-1 lg:mr-0">
				<BiLogOut fontSize={"1.5rem"} />
			</div>
			<div className="md:hidden">
				<AiOutlineShoppingCart fontSize={"1.5rem"} />
			</div>
			<div className="hidden md:flex w-full items-center  justify-between lg:py-2 ">
				<LeftView />
				<RightView />
			</div>
		</div>
	);
};

export default HeaderBottom;
