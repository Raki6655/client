import React, { useRef, forwardRef } from "react";
import { IoClose } from "react-icons/io5";
import "./navbar.css";
import Logo from "../Logo";
import SideNavContent from "./SideNavContent";
import HotDeals from "./HotDeals";
import DropDownMenuV2 from "../dropdown/DropDownMenuV2";

interface NavBarProps {
	innerRef: any;
	state: any;
	onClose: any;
}
interface props {
	state?: string;
	onClose: () => void;
	children?: React.ReactNode;
	ref: React.HTMLProps<HTMLDivElement>;
}

const Navbar = forwardRef<HTMLDivElement, props>(({ state, onClose }, ref) => {
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
		// <div
		// 	className="w-[100%] h-[100vh] bg-black/20 fixed top-0 z-10 side"
		// 	ref={ref}
		// >

		<div
			className={`navbar w-[80vw] h-full bg-white fixed z-[1000] top-0 left-0 py-3  ${getAnimationClassName()}`}
			ref={ref}
		>
			<div className="flex flex-col relative">
				<IoClose onClick={onClose} className="absolute right-0 text-lg " />
				<div>
					<Logo />
				</div>
				<hr className="text-lg mt-3" />
				<div>
					<HotDeals />
				</div>
				<hr className="mb-5" />
				<div className="w-full">
					<SideNavContent />
				</div>
			</div>
		</div>

		// </div>
	);
});

export default Navbar;
