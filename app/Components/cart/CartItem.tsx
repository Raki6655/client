import { ICartList, IProduct } from "@/app/types/typed";
import { CartActions, IReducerCartItem } from "@/app/store/cart-slice";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
interface ICartItem {
	product: IReducerCartItem;
}
const CartItem = ({ product }: ICartItem) => {
	const dispatch = useDispatch();
	let quant = useSelector((state: ICartList) =>
		state.cartItems.cartItem.find((item) => item._id === product._id)
	)?.quantity;
	let finalPrice = useSelector((state: ICartList) =>
		state.cartItems.cartItem.find((item) => item._id === product._id)
	)?.itemPrice;
	const [quantity, setQuantity] = useState<number>(quant!);
	function incrementQuantity(e: any, product: IProduct) {
		e.preventDefault();
		setQuantity((prev) => ++prev!);
		dispatch(CartActions.addCartItem({ item: product, quantity: 1 }));
	}
	function decrementQuantity(e: any, product: IProduct) {
		e.preventDefault();

		setQuantity((prev) => --prev!);
		dispatch(CartActions.removeCartItem({ item: product }));
	}
	return (
		<div className="mb-5">
			<div className="flex gap-5">
				<Image
					src={product.image[0]}
					width={80}
					height={80}
					alt="img"
					style={{ objectFit: "contain" }}
				/>
				<p>{product.name}</p>
			</div>
			<div className="flex items-center gap-3">
				<span
					className="font-bolder text-xl"
					onClick={(e) => incrementQuantity(e, product)}
				>
					+
				</span>
				<div className="w-16 h-16 bg-white border-2 flex justify-center items-center border-black mt-3">
					{quantity}
				</div>
				<span
					className="font-bolder text-xl"
					onClick={(e) => decrementQuantity(e, product)}
				>
					-
				</span>
				<span className="ml-auto text-md text-red-600">
					Total Amount <br />
					{product.price * quantity}
				</span>
				<span className="ml-auto text-md text-green-700">{finalPrice}</span>
			</div>
			<hr className="my-5"></hr>
		</div>
	);
};

export default CartItem;
