import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./sidebar-slice";
import dropdownSlice from "./dropdown-slice";
import activemenuSlice from "./activemenu-slice";
import SortedProductListReducer from "./sorted-product";
import NewestProductReducer from "./newest-slice";
import CartItemsReducer from "./cart-slice";
const store = configureStore({
	reducer: {
		sidebar: sidebarSlice,
		dropdown: dropdownSlice,
		activemenu: activemenuSlice,
		sortedProducts: SortedProductListReducer,
		newestproduct: NewestProductReducer,
		cartItems: CartItemsReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});
export default store;
