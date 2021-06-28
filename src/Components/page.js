import Header from "./Header/Header";
import React from "react";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Work from "./Work/Work";
import Expertise from "./Expertise/Expertise";
import Slider from "./Slider/Slider";
import Footer from "./Footer/Footer";
import { SmoothScrollProvider } from "../Providers/SmoothScrollProvider";
import gsap from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function Page(props) {
	gsap.registerPlugin(ScrollTrigger);
console.log(props.value)
	return (
		<>
			<SmoothScrollProvider>
				<Header />
				<Hero />
				<About scroll={props.value}/>
				<Work />
				<Expertise />
				<Slider />
				<Footer />
			</SmoothScrollProvider>
		</>
	);
}

export default Page;
