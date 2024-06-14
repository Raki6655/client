"use client";
import React from "react";
import HeaderTop from "./HeaderTop";
import HeaderBottom from "./HeaderBottom";

const index: React.FC = () => {
	return (
		<header className="header_container">
			<HeaderTop />
			<HeaderBottom />
		</header>
	);
};

export default index;
