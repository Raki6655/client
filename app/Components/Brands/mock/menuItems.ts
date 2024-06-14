import { BsLaptop, BsBook } from "react-icons/bs";
import { IoShirtOutline, IoShirtSharp } from "react-icons/io5";
import { MdOutlineToys } from "react-icons/md";
import { RiHeartPulseLine, RiFireLine } from "react-icons/ri";
import { AiOutlineHome, AiOutlinePercentage } from "react-icons/ai";
import { BiFootball } from "react-icons/bi";

import { ImMobile } from "react-icons/im";
import { FiMonitor, FiHeadphones } from "react-icons/fi";

import { GiLargeDress } from "react-icons/gi";
import { FaBaby, FaRedhat } from "react-icons/fa";

const menuItems = [
	{
		category: "Digital",
		icon: BsLaptop,
		productsGroup: [
			{
				title: "Laptop and Accessories",
				subName: "laptop",
				icon: BsLaptop,
				subtitles: [
					"asus",
					"apple",
					"dell",
					"lenovo",
					"samsung",
					"hp",
					"huawei",
					"acer",
					"msi",
				],
			},
			{
				title: "Mobile and Accessories",
				subName: "mobile",
				icon: ImMobile,
				subtitles: [
					"samsung",
					"apple",
					"nokia",
					"xiaomi",
					"motorola",
					"lg",
					"sony",
				],
			},
			{
				title: "Computer and Accessories",
				subName: "computer",
				icon: FiMonitor,
				subtitles: ["monitor", "mouse", "keyboard", "hard"],
			},
			{
				title: "Other",
				subName: "other",
				icon: FiHeadphones,
				subtitles: ["tablet", "powerBank", "speaker", "headphones"],
			},
		],
	},
	{
		category: "Fashion and Clothes",
		icon: IoShirtOutline,
		productsGroup: [
			{
				title: "women",
				icon: GiLargeDress,
				subtitles: [
					"dress",
					"skirt",
					"jeans",
					"pants",
					"tShirt",
					"shoes",
					"scarf",
				],
			},
			{
				title: "men",
				icon: IoShirtSharp,
				subtitles: ["shirt", "pants", "tie", "tShirt", "shoes", "jeans"],
			},
			{
				title: "child",
				icon: FaBaby,
				subtitles: ["overalls", "mittens", "babyApron", "shoes", "tShirt"],
			},
			{
				title: "other",
				icon: FaRedhat,
				subtitles: ["watch", "wallet", "hat", "belt"],
			},
		],
	},
	{ category: "Toys and Baby", icon: MdOutlineToys },
	{ category: "Cosmetic", icon: RiHeartPulseLine },
	{ category: "Furniture and Kitchen", icon: AiOutlineHome },
	{ category: "Sport and Trip", icon: BiFootball },
	{ category: "Books,Stationery and Art", icon: BsBook },
];

export default menuItems;

export const extraMenu = [
	{ title: "Offers and Discounts", icon: AiOutlinePercentage, href: "/offers" },
	{ title: "The Best-Sells", icon: RiFireLine, href: "/" },
];
