"use client";
import { useEffect, useState } from "react";
// interface Date{
//     addDays(days:number):Date
// }

//works with JS
// Date.prototype.addDays = function(days:number) :Date{
//     var date = new Date(this.valueOf())
//     return date
// }

class CustomDate extends Date {
	addDays(days: number): Date {
		let date = new Date(this.valueOf());
		date.setDate(date.getDate() + days);
		return date;
	}
}
function dateConverter(counter: number) {
	let days = Math.floor(counter / (1000 * 60 * 60 * 24));
	let hours = Math.floor((counter % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	let minutes = Math.floor((counter % (1000 * 60 * 60)) / (1000 * 60));
	let seconds = Math.floor((counter % (1000 * 60)) / 1000);
	return [days, hours, minutes, seconds];
}

let date = new CustomDate();

const useCountDown = (days: number) => {
	let expireDate = date.addDays(days);
	let countDownDate = new Date(expireDate).getTime();

	const [countDown, setCountDown] = useState<any>(
		countDownDate - new Date().getTime()
	);

	useEffect(() => {
		let interval = setInterval(() => {
			setCountDown(countDownDate - new Date().getTime());
		}, 1000);
		return () => clearInterval(interval);
	}, [countDownDate]);
	return dateConverter(countDown);
};
export { useCountDown };
