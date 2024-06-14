import { IProduct } from "@/app/lib/types/typed";
import React from "react";
interface IProductPrice {
	product: IProduct;
}
const PriceInfo: React.FC<IProductPrice> = ({ product }) => {
	return (
		<div className="px-2 flex flex-col gap-1 text-gray-800 text-md mt-8 ">
			<span className="w-full max-h-10 overflow-hidden">{product.name}</span>
			<span className="text-red-800">$ {product.irrprice}</span>
			<div>
				<span className=" font-bold">$ {product.irrdiscount}</span>
				<span className="text-green-800 ml-2">(-{product.discount}%)</span>
			</div>
		</div>
	);
};

export default PriceInfo;
