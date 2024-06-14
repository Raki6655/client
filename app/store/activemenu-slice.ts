import { PayloadAction } from "@reduxjs/toolkit";

const { createSlice } = require("@reduxjs/toolkit");

interface IActiveMenu {
	activeMenuName: String;
	activeMenuIndex: number;
}
const inititalState: IActiveMenu = {
	activeMenuName: "",
	activeMenuIndex: 0,
};

const activeMenuSlice = createSlice({
	name: "activemenu",
	inititalState,
	reducers: {
		setActiveMenuName(state: IActiveMenu, action: PayloadAction<string>) {
			state.activeMenuName = action.payload;
		},
		setActiveMenuIndex(state: IActiveMenu, action: PayloadAction<number>) {
			state.activeMenuIndex = action.payload;
		},
	},
});
export const ActiveMenuActions = activeMenuSlice.actions;
export default activeMenuSlice.reducers;
