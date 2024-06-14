import { createSlice } from "@reduxjs/toolkit";

export interface DropDownProps {
	isDropDownOpen: boolean;
	dropDownList: [];
	isSubDropDownOpen: boolean;
}

const initialState: DropDownProps = {
	isDropDownOpen: false,
	dropDownList: [],
	isSubDropDownOpen: false,
};

export const dropdownSlice = createSlice({
	name: "dropdown",
	initialState: initialState,
	reducers: {
		openDropDown(state) {
			state.isDropDownOpen = true;
		},
		closeDropdown(state) {
			state.isDropDownOpen = false;
		},
	},
});
export const DropDownActions = dropdownSlice.actions;
export default dropdownSlice.reducer;
