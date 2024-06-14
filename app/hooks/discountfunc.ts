export const priceAfterDiscount = (price: number, discount: number) => {
	return price - (price * discount) / 100;
};
