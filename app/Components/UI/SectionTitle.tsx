import React from "react";
interface TitleProps {
	title: string;
}
const SectionTitle: React.FC<TitleProps> = ({ title }) => {
	return (
		<div className="w-full text-center mt-5 lg:mt-16 mb-5 lg:mb-10">
			<span className="text-2xl font-semibold  ">{title}</span>
		</div>
	);
};

export default SectionTitle;
