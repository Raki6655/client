import { IReducerCartItem } from "@/app/store/cart-slice";

export interface IDropDown {
	title: string;
	icon: React.ElementType;
	subtitles: string[];
}
export interface ISubList {
	category: string;
	index: number;
	productsGroup: IDropDown[] | undefined;
}
export interface ISubmenuItems {
	submenuItem: IDropDown[] | undefined;
}
export interface SideBarState {
	isSidebarOpen: boolean;
	isNavbarOpen: boolean;
	dropdownList: IDropDown[] | null;
}
export interface ISideNavBarRootState {
	sidebar: SideBarState;
}
export interface IProduct {
	details: {
		connectionType: string[];
		connectors: string[];
		back_camera: string;
		battery: string;
		front_camera: string;
		operating_system: string;
		processor: string;
		screen: string;
	};
	_id: string;
	_createdAt: string;
	_rev: string;
	_type: string;
	_updatedAt: string;
	brand: string;
	category: string[];
	discount: number;
	irrdiscount: number;
	irrprice: number;
	isOffer: boolean;
	name: string;
	price: number;
	registerDate: string;
	starRating: number;
	image: string;
	slug: {
		current: string;
	};
}
export interface ICartList {
	cartItems: {
		cartItem: IReducerCartItem[];
		isCartOpen: boolean;
		totalPrice: number;
		totalQuantity: number;
	};
}
