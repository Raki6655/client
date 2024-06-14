import React from "react";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

interface Props {
	className?: string;
	style?: any;
	onClick?: () => void;
}
export const NextArrow: React.FC<Props> = ({ className, style, onClick }) => {
	return (
		<div
			className={`${
				className + ""
			}he absolute  z-10 w-14 h-full top-0 !flex items-center justify-center ltr:left-auto ltr:right-3 rtl:right-auto rtl:-left-2 before:text-[20px] lg:before:text-[40px] before:content-[''] hover:bg-white/30 drop-shadow-xl cursor-pointer text-red-800`}
			style={{ ...style }}
			onClick={onClick}
		>
			<HiOutlineChevronRight
				style={{ color: "gray", borderRadius: "50%", background: "white" }}
				fontSize={"2rem"}
			/>
		</div>
	);
};
export const PrevArrow: React.FC<Props> = ({ className, style, onClick }) => {
	return (
		<div
			className={`${className}he absolute  z-10 w-14 h-full !flex items-center justify-center ltr:-left-5 ltr:right-auto rtl:-right-5 rtl:left-auto before:text-[20px] lg:before:text-[40px] before:content-[''] hover:bg-white/30 drop-shadow-lg cursor-pointer`}
			style={{ ...style }}
			onClick={onClick}
		>
			<HiOutlineChevronLeft
				style={{ color: "gray", borderRadius: "50%", background: "white" }}
				fontSize={"2rem"}
			/>
		</div>
	);
};
