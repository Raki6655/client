"use client";
import React from "react";
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import Header from "../header";
import Footer from "../footer";
import NextNProgress from "nextjs-progressbar";
import { Provider } from "react-redux";
import store from "@/app/store";

const AppLayout: React.FC<{ children: React.ReactNode; }> = ({ children }) => {
	return (
		<div className="w-[95%] mx-auto">
			<Provider store={store}>
				<ThemeProvider enableSystem={true} attribute="class">
					<Head>
						<title>e-com</title>
					</Head>
					<NextNProgress height={7} />
					<Header />
					{children}
					<hr className="bg-gray-300 py-[1px] w-full mb-10" />
					<Footer />
				</ThemeProvider>
			</Provider>
		</div>
	);
};

export default AppLayout;
