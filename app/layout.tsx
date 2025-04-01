import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Harsh Vishwakarma",
	description: "Portfolio of Harsh Vishwakarma",
};

import localFont from "next/font/local";
const myFont = localFont({
	src: "./fonts/regular.otf",
	display: "swap",
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' className={myFont.className}>
			<body>{children}</body>
		</html>
	);
}
