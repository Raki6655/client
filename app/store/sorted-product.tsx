import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../lib/types/typed";
import { stat } from "fs";

interface IProductList {
	productList: IProduct[];
}

const initialState: IProductList = {
	productList: [],
};

const SortedProductsSlice = createSlice({
	name: "sortedProducts",
	initialState,
	reducers: {
		sortedProductList(
			state,
			action: PayloadAction<{ productsList: IProduct[]; searchType: string }>
		) {
			switch (action.payload.searchType) {
				case "all":
					state.productList = action.payload.productsList;
					break;
				case "newest":
					console.log(action.payload.productsList);
					let newest = [...action.payload.productsList].sort(
						(a: IProduct, b: IProduct) =>
							new Date(a._createdAt).getTime() -
							new Date(b._createdAt).getTime()
					);
					state.productList = newest;
					break;
				case "cheapest":
					let cheapest = [...action.payload.productsList].sort(
						(a: IProduct, b: IProduct) => a.price - b.price
					);
					state.productList = cheapest;
					break;
				case "the most expensive":
					let expensive = [...action.payload.productsList].sort(
						(a: IProduct, b: IProduct) => b.price - a.price
					);
					state.productList = expensive;
					break;
			}
		},
	},
});
export const SortedProductListActions = SortedProductsSlice.actions;
export default SortedProductsSlice.reducer;
