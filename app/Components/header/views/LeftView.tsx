import React, { useRef } from "react";
import { AiOutlineFire } from "react-icons/ai";
import { VscThreeBars } from "react-icons/vsc";
import DropDownMenu from "../dropdown/DropDownMenu";
import { Transition } from "react-transition-group";
import { useDispatch, useSelector } from "react-redux";
import { DropDownActions, DropDownProps } from "@/app/store/dropdown-slice";
interface DropDownRootProps {
	dropdown: DropDownProps;
}

const LeftView = () => {
	const isDropDownOpen = useSelector(
		(state: DropDownRootProps) => state.dropdown.isDropDownOpen
	);
	const dispatch = useDispatch();
	const dropDownRef = useRef<HTMLDivElement>(null);
	const openDropDownHandler = (e: any) => {
		dispatch(DropDownActions.openDropDown());
	};
	const closeDropDownHandler = (e: any) => {
		dispatch(DropDownActions.closeDropdown());
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
		<div className="flex gap-3">
			<VscThreeBars
				fontSize={"1.5rem"}
				onMouseOver={(e) => openDropDownHandler(e)}
			/>

			<span className="font-medium">category of Goods</span>
			<span className="text-base/90">% offer and discounts | </span>
			<div className="flex items-center">
				<AiOutlineFire />
				<span>The best deals</span>
			</div>
			<Transition
				nodeRef={dropDownRef}
				in={isDropDownOpen}
				timeout={300}
				mountOnEnter
				unmountOnExit
			>
				{(state) => (
					<>
						<div
							ref={dropDownRef}
							className="fixed w-[100vw] h-full bg-black/40 z-[100] top-[11rem] left-0"
							style={{
								...defaultStyle,
								...transitionStyles[state],
							}}
						>
							<DropDownMenu
								ref={dropDownRef}
								state={state}
								closeDrop={closeDropDownHandler}
							/>
						</div>
					</>
				)}
			</Transition>
		</div>
	);
};

export default LeftView;
