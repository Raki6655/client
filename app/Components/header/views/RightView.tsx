"use client";
import { useTheme } from "next-themes";
import React from "react";
import { BiMoon } from "react-icons/bi";
import { GrLanguage } from "react-icons/gr";
import ThemeItem from "./Themes/ThemeItem";
import { MdOutlineLightMode } from "react-icons/md";

const RightView = () => {
	const { systemTheme, theme } = useTheme();
	const currentTheme = theme === "system" ? systemTheme : theme;

	const renderThemeChanger = () => {
		if (currentTheme === "dark") {
			return <ThemeItem theme="light" Icon={MdOutlineLightMode} />;
		} else {
			return <ThemeItem theme="dark" Icon={BiMoon} />;
		}
	};

	return (
		<div className="flex items-center gap-5">
			<div className="flex gap-3 items-center">
				<span className="font-bold">En</span> <GrLanguage />
			</div>
			<span className="font-gray-600"> | </span>
			<div>{renderThemeChanger()}</div>
		</div>
	);
};

export default RightView;
