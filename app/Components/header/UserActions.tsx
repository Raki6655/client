import { ICartList, IProduct } from "@/app/lib/types/typed";
import { CartActions } from "@/app/store/cart-slice";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { AiOutlineShoppingCart } from "react-icons/ai";

import { BiLogOut } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../cart/CartItem";

const UserActions = () => {
	let dispatch = useDispatch();
	let isCartBoxOpen = useSelector(
		(state: ICartList) => state.cartItems.isCartOpen
	);
	let cartItems = useSelector((state: ICartList) => state.cartItems.cartItem);
	let totalPrice = useSelector(
		(state: ICartList) => state.cartItems.totalPrice
	);
	let totalProduct = useSelector(
		(state: ICartList) => state.cartItems.totalQuantity
	);

	return (
		<div className="hidden md:flex gap-3 lg:absolute right-0 ">
			<div className="hidden md:block">
				<BiLogOut fontSize={"1.5rem"} />
			</div>
			<div className="hidden md:flex">
				<span>signUspan | login</span>
			</div>
			<Link href={"/cart"}>
				<div
					onMouseOver={() =>
						dispatch(
							CartActions.openCartBox({
								isCartOpen: true,
							})
						)
					}
					onMouseLeave={() =>
						dispatch(CartActions.closeCartBox({ isCartOpen: false }))
					}
				>
					<div
						className="hidden md:block relative "

						// onMouseLeave={() =>
						// 	dispatch(CartActions.closeCartBox({ isCartOpen: false }))
						// }
					>
						<AiOutlineShoppingCart fontSize={"1.5rem"} />
					</div>
					{isCartBoxOpen && (
						<div className=" absolute right-0  z-10 h-80 w-80 max-h-80 overflow-y-scroll bg-white transition-opacity duration-300 p-2 rounded-md shadow-md">
							<div className="w-full flex justify-between mt-1 mb-5">
								<p>
									{totalProduct}
									product
								</p>
								<p className="text-blue-500 ">See cart</p>
							</div>
							{cartItems?.map((item) => (
								<CartItem product={item} />
							))}
							<div className="flex justify-between">
								<p>Total Amount</p>
								<p>${totalPrice}</p>
							</div>
						</div>
					)}
				</div>
			</Link>
		</div>
	);
};

export default UserActions;
