import React, { forwardRef } from "react";
import { IDropDown } from "../../dropdown/DropDownMenuV2";
import { useSelector } from "react-redux";
import "./submenu.css";
import { BiArrowBack } from "react-icons/bi";
import {
	MdKeyboardArrowRight,
	MdOutlineKeyboardArrowDown,
} from "react-icons/md";

interface SubMenuProps {
	item: IDropDown[];
	open: boolean;
	close: () => void;
	state: string;
}

const SubMenu = forwardRef<HTMLDivElement, SubMenuProps>(
	({ item, close, open, state }, ref) => {
		const getAnimationClassName = () => {
			switch (state) {
				case "entering":
					return "entering";
				case "entered":
					return "entered";
				case "exiting":
					return "exiting";
				default:
					return "";
			}
		};

		return (
			<div>
				{/* <span onClick={close} className="relative right-0">
          close
        </span> */}

				<div
					className={`submenu w-[80%] h-full bg-white fixed top-0 left-0 flex flex-col }`}
					ref={ref}
				>
					<div className="w-full flex item-center  gap-5 px-2 py-5">
						<BiArrowBack fontWeight={800} fontSize={"2rem"} onClick={close} />
						<span className="font-bold mt-1 text-xl">Main Menu</span>
					</div>
					<hr />
					<div className="w-full flex item-center justify-between   px-2 py-5">
						<span className="font-semibold  text-sm">
							See All Products in this category
						</span>
						<MdKeyboardArrowRight
							fontWeight={800}
							fontSize={"1rem"}
							className="mt-1"
						/>
					</div>
					<hr className="mb-5" />
					{item.map((i, index) => (
						<div className="w-full py-4 px-3 flex justify-between font-semibold">
							<span key={index}>{i.title}</span>
							<MdOutlineKeyboardArrowDown />
						</div>
					))}
				</div>
			</div>
		);
	}
);

export default SubMenu;
