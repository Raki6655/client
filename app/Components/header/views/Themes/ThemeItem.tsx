import { useTheme } from "next-themes";
import React from "react";

interface ThemeProps {
	Icon: any;
	currentTheme?: any;
	theme: string;
}

const ThemeItem = ({ Icon, currentTheme, theme }: ThemeProps) => {
	const { setTheme } = useTheme();
	function onThemeClickHandler() {
		setTheme(theme);
	}
	return (
		<div
			className={`flex items-center justify-start py-1 ${
				currentTheme && currentTheme === theme ? "font-bold" : ""
			}`}
			onClick={onThemeClickHandler}
		>
			<button aria-label="theme-toggle" role="button">
				<Icon
					style={{
						fontSize: "1.3rem",
						filter: "drop-shadow(0px 0px 5px rgb(0 0 0 / 0.3))",
					}}
				/>
			</button>
		</div>
	);
};

export default ThemeItem;
