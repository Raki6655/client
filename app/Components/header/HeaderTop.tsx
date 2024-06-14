"use client";
import React, { useRef } from "react";
import { AiOutlineAlignLeft, AiOutlineSetting } from "react-icons/ai";
import Logo from "./Logo";
import { Transition } from "react-transition-group";
import { GoSearch } from "react-icons/go";

import UserActions from "./UserActions";
import { useDispatch, useSelector } from "react-redux";
import { sideNavBarActions } from "@/app/store/sidebar-slice";
import Navbar from "./menu/Navbar";
import SideNavContent from "./menu/SideNavContent";
import { ISideNavBarRootState } from "@/app/types/typed";

interface SideBarState {
	isSidebarOpen: boolean;
	isNavbarOpen: boolean;
	dropdownList: [string | null];
}

const HeaderTop = () => {
	const dispatch = useDispatch();
	const navRef = useRef<HTMLDivElement>(null);
	const isSideBarOpen = useSelector(
		(state: ISideNavBarRootState) => state.sidebar.isSidebarOpen
	);

	const openNav = () => {
		dispatch(sideNavBarActions.openSideBar());
	};

	const closeNav = () => {
		dispatch(sideNavBarActions.closeSideBar());
		dispatch(sideNavBarActions.closeNavbar());

		dispatch(sideNavBarActions.setSubEntries([]));
	};
	const defaultStyle = {
		transition: `opacity 300ms ease-in-out`,
		opacity: 0,
	};

	const transitionStyles = {
		entering: { opacity: 1 },
		entered: { opacity: 1 },
		exiting: { opacity: 0 },
		exited: { opacity: 0 },
		unmounted: {},
	};
	return (
		<>
			<div className="top_list w-full flex justify-between my-5 md:justify-start items-center gap-5 relative">
				<div className="md:hidden" onClick={openNav}>
					<AiOutlineAlignLeft style={{ fontSize: "1.5rem" }} />
				</div>
				<Logo />
				<div className="hidden md:flex-grow max-w-[50rem] md:flex gap-4 py-3 px-4 items-center bg-slate-600/10 relative left-0">
					<GoSearch />
					<input
						className="bg-transparent text-black/60 outline-none "
						placeholder="Enter something "
					/>
				</div>
				<UserActions />
				<div className="md:hidden">
					<AiOutlineSetting fontSize={"1.5rem"} className="flex-grow" />
				</div>
			</div>
			<Transition
				nodeRef={navRef}
				in={isSideBarOpen}
				timeout={500}
				mountOnEnter
				unmountOnExit
			>
				{(state) => {
					return (
						<>
							<Navbar ref={navRef} state={state} onClose={closeNav} />

							<div
								className={`fixed inset-0 z-[9] bg-black/60
                  
                  `}
								style={{
									...defaultStyle,
									...transitionStyles[state],
								}}
								onClick={closeNav}
							></div>
						</>
					);
				}}
			</Transition>
		</>
	);
};

export default HeaderTop;
