
import React from "react";
import SpecialCard from "../UI/SpecialCard";
import SectionTitle from "../UI/SectionTitle";

const index = () => {
	return (
		<div>
			<SectionTitle title="Special Sales" />
			<div className="relative flex flex-col gap-5 lg:flex lg:flex-row lg:gap-16 ">
				<SpecialCard />
				<SpecialCard />
			</div>
		</div>
	);
};

export default index;
