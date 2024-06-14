import menuItems from "@/app/Components/Brands/mock/menuItems";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { RxCaretRight } from "react-icons/rx";
import SubMenu from "./sub-category/SubMenu";
import { useDispatch, useSelector } from "react-redux";
import { ActiveMenuActions } from "@/app/store/activemenu-slice";
import { IDropDown, ISubList } from "../dropdown/DropDownMenuV2";
import { sideNavBarActions } from "@/app/store/sidebar-slice";
import { ISideNavBarRootState } from "@/app/lib/types/typed";
import { Transition, CSSTransition } from "react-transition-group";
import "./sub-category/submenu.css";
const SideNavContent = () => {
	const [sideMenuItems, setSideMenuItems] = useState<IDropDown[]>([]);
	const dispatch = useDispatch();
	function sideMenuItemsHandler(item: IDropDown[] | undefined): void {
		if (item) {
			setSideMenuItems(item);
			dispatch(sideNavBarActions.openNavbar());
			dispatch(sideNavBarActions.setSubEntries(item));
		}
	}
	function closeNav() {
		dispatch(sideNavBarActions.closeNavbar());

		// dispatch(sideNavBarActions.setSubEntries([]));
	}
	const isNavBarOpen = useSelector(
		(state: ISideNavBarRootState) => state.sidebar.isNavbarOpen
	);
	const subMenuRef = useRef<HTMLDivElement>(null);

	return (
		<div className="pl-5 overflow-hidden w-full">
			<h2 className="font-bold text-xl mb-5">Category of Goods</h2>
			{menuItems &&
				menuItems.map((item, index) => (
					<div key={index} className="flex justify-between items-center">
						{item && (
							<div
								className="flex w-full gap-5 items-center  text-md py-4 hover:text-red-600 transition-color duration-300"
								onClick={() => sideMenuItemsHandler(item.productsGroup)}
							>
								<item.icon fontSize={"1.5rem"} className="" />
								<Link href={""} className="font-medium">
									{item.category}
								</Link>
							</div>
						)}
						{item.productsGroup && (
							<RxCaretRight
								fontSize={"1.5rem"}
								className="relative right-0 mr-10"
							/>
						)}
					</div>
				))}
			<CSSTransition
				nodeRef={subMenuRef}
				in={isNavBarOpen}
				timeout={300}
				classNames={{
					enter: "submenu entering",
					enterActive: "submenu entered",
					exit: "submenu exiting",
					exitActive: "submenu exited",
				}}
				mountOnEnter
				unmountOnExit
			>
				<SubMenu
					item={sideMenuItems}
					open={isNavBarOpen}
					close={closeNav}
					ref={subMenuRef}
					state={isNavBarOpen ? "entered" : "exited"}
				/>
			</CSSTransition>
		</div>
	);
};

export default SideNavContent;
