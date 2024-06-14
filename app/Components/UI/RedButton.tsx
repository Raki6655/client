import React from "react";
interface ButtonProps {
	heading: string;
}
const RedButton: React.FC<ButtonProps> = ({ heading }) => {
	return (
		<button className="px-5 py-1 cursor-pointer shadow-sm bg-red-800 w-48 text-lg rounded-lg text-white hover:scale-105 duration-200 my-5">
			{heading}
		</button>
	);
};

export default RedButton;
