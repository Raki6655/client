"use client";
import React,{useState,useEffect} from "react";
import RedButton from "./RedButton";
import Image from "next/image";
import SalesImage1 from "../../public/images/special_sales1.jpg";
import DateTimeCard from "./DateTimeCard";

const SpecialCard = () => {
	let [loaded,setLoaded] = useState(false)
	useEffect(()=> {
setLoaded(true)
	},[])
	return (
		<div className="w-full h-[12rem] bg-green-500 relative top-0 lg:h-[25rem] overflow-hidden">
			<Image
				src={SalesImage1}
				alt="sales_image"
				className=" hover:scale-110 duration-1000 max-h-full object-cover"
			/>
			<div className="absolute top-0 mt-10 px-0 lg:px-5 flex flex-col gap-3 w-full">
				<h3>Larissa Furniture</h3>
				<p className="max-w-full hidden lg:block">
					Larissa beautiful sofa with its private design can give a unique
					beauty to your reception decoration.
				</p>
				{/* <RedButton heading="See Product" /> */}
				{loaded && <DateTimeCard days={6} />}
			</div>
		</div>
	);
};

export default SpecialCard;
