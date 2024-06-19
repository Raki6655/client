import { footerContent, socialMedia } from "@/app/Components/Brands/mock/footer";
import React from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

const index = () => {
	return (
		<div className="mt-5">
			<div className="relative max-w-[100vw] flex flex-col lg:flex-row justify-between mb-10">
				<div className="flex flex-col lg:flex-row w-2/3 justify-between text-gray-600 ">
					{footerContent.map((item, index) => (
						<div className="flex flex-col relative" key={item.title}>
							<span className="mb-3 before:content-[''] before:h-5  before:w-1 before:absolute  before:-translate-x-2 before:translate-y-1  before:bg-red-700">
								{item.title}
							</span>
							<div className="w-full flex flex-col gap-3">
								{item.subtitles.map((item, index) => (
									<span className="pl-3" key={item.text}>{item.text}</span>
								))}
							</div>
						</div>
					))}
				</div>
				<div className="text-gray-600">
					<span className="mb-10 text-xl font-medium">Be With Us!</span>
					<div className="flex gap-5 my-3">
						{socialMedia.map((item, index) => (
							<item.icon fontSize={"2rem"} key={item.name} />
						))}
					</div>

					<span className="">
						Stay up to date with the latest discounts by emailing us
					</span>
					<div className="w-full flex mt-3">
						<input
							type="email"
							placeholder="Please Enter Your Email"
							className="w-2/3 flex-1 border-none shadow-md bg-white text-gray-700 px-10 py-3"
						/>
						<button className="px-3 py-2 text-white rounded-sm bg-red-800">
							Register
						</button>
					</div>
				</div>
			</div>
			<hr className="bg-gray-300 py-[1px] w-full " />
			<div className="w-full relative left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 mt-5 text-gray-800">
				<span>
					© 2022 Hub. All rights reserved - Designed and Developed with{" "}
					<AiFillHeart
						style={{ color: "red", fontSize: "1.5rem", display: "inline" }}
					/>{" "}
					by Alan Neupane
				</span>
				<div>
					<RiDoubleQuotesL
						style={{ display: "inline", color: "red", verticalAlign: "top" }}
					/>
					<span className="">
						Work is meant to improve life, not the opposite.
						<RiDoubleQuotesR
							style={{ display: "inline", color: "red", verticalAlign: "top" }}
						/>{" "}
						Dr.Alan James
					</span>
				</div>
			</div>
		</div>
	);
};

export default index;
