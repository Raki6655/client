"use client";
import React from "react";
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import Header from "../header";
import Footer from "../footer";
import NextNProgress from "nextjs-progressbar";



const AppLayout: React.FC<{ children: React.ReactNode; }> = ({ children }) => {
    return (
        <div className="w-[95%] mx-auto">

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

        </div>
    );
};

export default AppLayout;