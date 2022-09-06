import dynamic from "next/dynamic";
import React from "react";

type AboutProps = {};
const Header = dynamic(() => import("@/components/common/Header"), {
	ssr: false,
});
const About = (props: AboutProps) => {
	console.log("about");

	return (
		<div>
			<h1>About Page</h1>
			<Header />
		</div>
	);
};

export default About;
