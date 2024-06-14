import React, { forwardRef, useEffect, useState } from "react";
import "../menu/navbar.css";
import LeftMenu from "./LeftMenu";
import { useDispatch, useSelector } from "react-redux";
import menuItems from "@/app/Components/Brands/mock/menuItems";
import { ActiveMenuActions } from "@/app/store/activemenu-slice";
import SubmenuList from "./SubmenuList";
import Link from "next/link";
import { IDropDown, ISubList } from "@/app/lib/types/typed";
interface DropDownRootProps {
	ref: any;
	closeDrop: any;
	state: any;
}

const DropDownMenu = forwardRef<HTMLDivElement, DropDownRootProps>(
	({ closeDrop, state }, ref) => {
		const dispatch = useDispatch();
		const [submenuItem, setSubMenuItem] = useState<IDropDown[]>();

		useEffect(() => {
			setSubMenuItem(menuItems[0].productsGroup);
			dispatch(ActiveMenuActions.setActiveMenuName(menuItems[0].productsGroup));
			dispatch(ActiveMenuActions.setActiveMenuIndex(0));
		}, []);
		function submenuHandler(subList: ISubList) {
			setSubMenuItem(subList.productsGroup);
			dispatch(ActiveMenuActions.setActiveMenuName(subList.productsGroup));
			dispatch(ActiveMenuActions.setActiveMenuIndex(subList.index));
		}
		console.log(submenuItem);

		const getAnimationClassName = () => {
			switch (state) {
				case "entering":
					return "entering";
				case "entered":
					return "entered";
				case "exiting":
					return "exiting";
				default:
					return "";
			}
		};
		return (
			<div
				className={`flex relative z[1011] w-[97%] rounded-b-lg bg-white h-[60%] mx-auto dropdown  pt-5 ${getAnimationClassName()}`}
				ref={ref}
				onMouseLeave={() => closeDrop()}
			>
				<LeftMenu submenuHandler={submenuHandler} />
				<div className="w-full px-5">
					<Link href={"/category"}>
						<span className="relative text-md font-semibold mt-5 w-full">
							See all products in this category
						</span>
					</Link>
					<SubmenuList submenuItem={submenuItem} />
				</div>
			</div>
		);
	}
);

export default DropDownMenu;
