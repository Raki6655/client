"use client";
import { useCountDown } from "@/app/hooks/useCountDown";
import React from "react";
interface IDateTimeCard {
	days: number;
}
const DateTimeCard = ({ days }: IDateTimeCard) => {
	let [day, hours, minutes, seconds] = useCountDown(days);

	return (
		<div>
			<div className="max-w-full  bg blue-800 mt-1 flex gap-2 justify-center items-center text-sm lg:mt-20 ">
				{/* <DateTimeCard />
		<span className="text-lg font-bold">:</span> */}
				<div className="bg-white py-1 lg:py-3 px-5 rounded-md shadow-md w-12 text-center flex justify-center lg:scale-125">
					{day} days
				</div>
				<span className="text-lg font-bold lg:mx-5">:</span>
				<div className="bg-white py-1 lg:py-3 px-5 rounded-md shadow-md w-12 text-center flex justify-center lg:scale-125">
					{hours} hours
				</div>
				<span className="text-lg font-bold lg:mx-5">:</span>
				<div className="bg-white py-1 lg:py-3 px-5 rounded-md shadow-md w-12 text-center flex justify-center lg:scale-125">
					{minutes} minutes
				</div>
				<span className="text-sm font-bold lg:mx-5">:</span>
				<div className="bg-white py-1 lg:py-3 px-5 rounded-md shadow-md w-12 text-center flex justify-center lg:scale-125">
					{seconds} seconds
				</div>
			</div>
		</div>
	);
};

export default DateTimeCard;
