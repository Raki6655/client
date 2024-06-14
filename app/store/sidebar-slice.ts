import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IDropDown, SideBarState } from "../types/typed";

const initialState: SideBarState = {
	isSidebarOpen: false,
	isNavbarOpen: false,
	dropdownList: null,
};

export const sidebarSlice = createSlice({
	name: "sidebar",
	initialState: initialState,
	reducers: {
		openSideBar(state) {
			state.isSidebarOpen = true;
		},
		closeSideBar(state) {
			state.isSidebarOpen = false;
		},
		openNavbar(state) {
			state.isNavbarOpen = true;
		},
		closeNavbar(state) {
			state.isNavbarOpen = false;
		},
		setSubEntries(state, actions: PayloadAction<IDropDown[]>) {
			state.dropdownList = actions.payload;
		},
	},
});
export const sideNavBarActions = sidebarSlice.actions;

export default sidebarSlice.reducer;
