import React from "react";
import { MdOutlineSort } from "react-icons/md";
interface ISortOptions {
	active: string;
	click: (item: string) => void;
	selected: string;
}
const SOption = [
	"All",
	"Newest",
	"The Most Popular",
	"Cheapest",
	"The Most Expensive",
];
const SortOptions: React.FC<ISortOptions> = ({ active, click }) => {
	return (
		<div className="w-full lg:w-1/2 flex flex-col lg:flex-row gap-5 text-sm item-center ">
			<div className="flex gap-2">
				<MdOutlineSort />
				<span>Sort Based On</span>
			</div>
			<div className="flex gap-3">
				{SOption.map((item: string) => (
					<span
						key={item}
						className={`${
							item.toLowerCase() == active.toLowerCase() && "text-red-700"
						} cursor-pointer`}
						onClick={() => click(item.toLowerCase())}
					>
						{item}
					</span>
				))}
			</div>
		</div>
	);
};

export default SortOptions;
