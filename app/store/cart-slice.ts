import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../types/typed";
import { priceAfterDiscount } from "../hooks/discountfunc";


export interface IReducerCartItem extends IProduct {
	quantity: number;
	itemPrice: number;
}
interface ICartProducts {
	isCartOpen: boolean;
	cartItem: IReducerCartItem[];
	totalQuantity: number;
	totalPrice: number;
}
let initialState: ICartProducts = {
	isCartOpen: false,
	cartItem: [],
	totalQuantity: 0,
	totalPrice: 0,
};

const cartSlice = createSlice({
	name: "cart-items",
	initialState,
	reducers: {
		openCartBox(state, action) {
			state.isCartOpen = true;
		},
		closeCartBox(state, action) {
			state.isCartOpen = false;
		},
		addCartItem(
			state,
			action: PayloadAction<{ item: IProduct; quantity: number }>
		): void {
			let existingItem = state.cartItem.find(
				(item) => item._id === action.payload.item._id
			);
			state.totalQuantity = state.totalQuantity + action.payload.quantity;

			if (existingItem) {
				existingItem.quantity += 1;
				existingItem.itemPrice += action.payload.item.discount
					? priceAfterDiscount(
							action.payload.item.price,
							action.payload.item.discount
					  )
					: action.payload.item.price;

				state.totalPrice += action.payload.item.discount
					? priceAfterDiscount(
							action.payload.item.price,
							action.payload.item.discount
					  )
					: action.payload.item.price;

				return;
			} else {
				let discountedPrice = action.payload.item.discount
					? priceAfterDiscount(
							action.payload.item.price,
							action.payload.item.discount
					  )
					: action.payload.item.price;
				state.totalPrice += action.payload.item.discount
					? priceAfterDiscount(
							action.payload.item.price,
							action.payload.item.discount
					  )
					: action.payload.item.price;

				state.cartItem = [
					...state.cartItem,
					{
						...action.payload.item,
						quantity: action.payload.quantity,
						itemPrice: discountedPrice,
					},
				];
			}
		},
		removeCartItem(state, action: PayloadAction<{ item: IProduct }>) {
			let itemToRemove = state.cartItem.find(
				(item) => item._id === action.payload.item._id
			);

			let currentQuantity = itemToRemove!.quantity;
			if (currentQuantity! >= 0) {
				state.totalPrice = state.totalPrice - action.payload.item.price;
				state.totalQuantity--;
				itemToRemove!.quantity--;
				itemToRemove!.itemPrice =
					itemToRemove!.itemPrice - action.payload.item.price;
			}
		},
	},
});
export const CartActions = cartSlice.actions;
export default cartSlice.reducer;
