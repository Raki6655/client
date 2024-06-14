import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../lib/types/typed";
interface IState {
	productList: IProduct[];
}
const initialState: IState = {
	productList: [],
};

const newestProductSlice = createSlice({
	name: "newestproduct",
	initialState,
	reducers: {
		setNewestProducts(state, actions) {
			switch (actions.payload.searchType) {
				case "newest":
					console.log("newest");
					let newest = actions.payload.productList.sort(
						(a: IProduct, b: IProduct) =>
							new Date(a._createdAt).getTime() -
							new Date(b._createdAt).getTime()
					);
					state.productList = newest;
					break;
				case "all":
					state.productList = actions.payload.productsList;
					break;
			}
		},
	},
});

export const NewestProductsAction = newestProductSlice.actions;
export default newestProductSlice.reducer;
