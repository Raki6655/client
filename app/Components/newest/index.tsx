
import React from "react";
import SectionTitle from "../UI/SectionTitle";
import Image from "next/image";
import MouseImage from "../../public/images/mouse.png";
import BlurredInfoBox from "../UI/BlurredInfoBox";
import NewItemCard from "../UI/NewItemCard";
import RedButton from "../UI/RedButton";
import { IProduct } from "@/app/types/typed";
import Link from "next/link";
interface INewItemsSection {
	products: IProduct[];
}
const NewItemsSection: React.FC<INewItemsSection> = ({ products }) => {
	return (
		<div className="w-full mt-5 relative left-1/2 -translate-x-1/2">
			<SectionTitle title="Newest Products" />
			<div className="flex flex-wrap flex-col  gap-10 lg:flex-row lg:justify-between">
				{products.map((item, index) => (
					<Link
						href={`${item.category[0]}/${item.category[1]}/${item.category[2]}/${item.name}`}
						key={item._createdAt}
					>
						<NewItemCard product={item} key={index} />
					</Link>
				))}
			</div>
			<div className="mx-auto flex justify-center">
				<RedButton heading="See All Items" />
			</div>
		</div>
	);
};

export default NewItemsSection;
