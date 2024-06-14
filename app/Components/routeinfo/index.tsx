"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const RouteInfo = () => {
	let path = usePathname();
	let result: Array<string> = [];

	let currentSubCategory: string[] = path.split("/");
	for (let i: number = 0; i < currentSubCategory.length; i++) {
		if (i == 0) {
			continue;
		} else if (i == 4) {
			let unFormatted = currentSubCategory[i];
			result.push(unFormatted.replace(/%20/g, " "));
		} else {
			result.push(currentSubCategory[i]);
		}
	}

	return (
		<div>
			<Link href={"/"}>
				<span className="text-gray-600">Z-shop Main Page</span>
			</Link>
			{result.map((item, index) => {
				let href = result.slice(0, index + 1).join("/");
				return (
					<Link href={href} key={index}>
						<span key={index} className="ml-3 text-gray-600">
							/ {item}
						</span>
					</Link>
				);
			})}
		</div>
	);
};

export default RouteInfo;
