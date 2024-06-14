"use client";
import React, { useEffect, useState } from "react";
import SortOptions from "../SortOptions";
import NewItemCard from "../UI/NewItemCard";
import { IProduct } from "@/app/lib/types/typed";
import { SortedProductListActions } from "@/app/store/sorted-product";
import { useDispatch, useSelector } from "react-redux";
import ProductSubList from "../ProductSubList";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import { NewestProductsAction } from "@/app/store/newest-slice";

interface IProductListing {
	products: IProduct[];
}
interface IPr {
	sortedProducts: {
		productList: IProduct[];
	};
}

const ProductListing: React.FC<IProductListing> = ({ products }) => {
	const dispatch = useDispatch();
	const path = usePathname();
	let [selected, setSelected] = useState("all");
	let category = path.slice(1);
	var gProducts = useSelector((state: IPr) => state.sortedProducts.productList);
	// let newest = [...products].sort(
	// 	(a, b) =>
	// 		new Date(b._createdAt).getTime() - new Date(a._createdAt).getTime()
	// );
	let [currentSearchType, setCurrentSearchType] = useState("all");

	useEffect(() => {
		dispatch(
			SortedProductListActions.sortedProductList({
				productsList: products,
				searchType: selected,
			})
		);
		// console.log([newest]);
	}, []);

	console.log(gProducts);
	const selectNewsest = (type: string) => {
		// let newest = [...products].sort(
		// 	(a, b) =>
		// 		new Date(a._createdAt).getTime() - new Date(b._createdAt).getTime()
		// );
		console.log("hello");
		setSelected(type);
		// console.log(type);
		dispatch(
			SortedProductListActions.sortedProductList({
				productsList: products,
				searchType: type,
			})
		);
	};
	return (
		<div className="w-full">
			<ProductSubList />
			<SortOptions
				active={selected}
				click={selectNewsest}
				selected={selected}
			/>
			<hr className="text-lg font-bold text-black bg-gray-400 mt-3 h-1" />
			<div className="flex gap-10 w-full mt-10 flex-wrap">
				{gProducts &&
					gProducts.map((item: IProduct, index: number) => (
						<Link
							href={`${item.category[0]}/${item.category[1]}/${item.category[2]}/${item.name}`}
							key={item._createdAt}
						>
							<NewItemCard product={item} />
						</Link>
					))}
			</div>
		</div>
	);
};

export default ProductListing;
