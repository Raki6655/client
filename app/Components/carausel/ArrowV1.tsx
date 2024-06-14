import React from "react";

interface Props {
	className?: string;
	style?: any;
	onClick?: () => void;
	to: string;
}
export const NextArrowV1: React.FC<Props> = ({
	className,
	style,
	onClick,
	to,
}) => {
	return (
		<div
			className={`${className} px-10 none relatvie z-100 w-12 md:w-16 lg:w-28 h-[100vh]  !flex items-center justify-center ltr:left-auto ltr:right-0 rtl:right-auto rtl:left-0   drop-shadow-lg before:content-['']`}
			style={{ ...style }}
			onClick={onClick}
			aria-label={to}
		/>
	);
};
export const PrevArrowV1: React.FC<Props> = ({
	className,
	style,
	onClick,
	to,
}) => {
	return (
		<div
			className={`${className} z-10 w-12 md:w-16 lg:w-[20rem] lg:h-full  !flex items-center justify-center ltr:left-0 ltr:right-auto rtl:right-3 rtl:left-auto before:text-[20px] lg:before:text-[30px] before:content-[''] drop-shadow-l text-xl`}
			style={{ ...style }}
			onClick={onClick}
			aria-label={to}
		></div>
	);
};
