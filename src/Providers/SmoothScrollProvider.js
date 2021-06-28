import gsap from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import React, { createContext, useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

export const SmoothScrollContext = createContext({
	scroll: null,
});

export const SmoothScrollProvider = ({ children }) => {
	const [scroll, setScroll] = useState(null);
	const scrollWrapper = useRef();

	useEffect(() => {
		if (!scroll) {
			(async () => {
				try {
					const LocomotiveScroll = (await import("locomotive-scroll")).default;

					setScroll(
						new LocomotiveScroll({
							el: scrollWrapper.current,
							smooth: true,
							lerp: 0.08,
						})
					);

					const locoScroll = new LocomotiveScroll({
						el: scrollWrapper.current,
						smooth: true,
						lerp: 0.1,
					});
					// console.log(locoScroll);

					locoScroll.on("scroll", ScrollTrigger.update);

					// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
					ScrollTrigger.scrollerProxy(scrollWrapper.current, {
						scrollTop(value) {
							// console.log(locoScroll.scroll.instance.scroll.y);
							return arguments.length
								? locoScroll.scrollTo(value, 0, 0)
								: locoScroll.scroll.instance.scroll.y;
						}, // we don't have to define a scrollLeft because we're only scrolling vertically.
						getBoundingClientRect() {
							return {
								top: 0,
								left: 0,
								width: window.innerWidth,
								height: window.innerHeight,
							};
						},
						// LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
						pinType: scrollWrapper.current.style.transform
							? "transform"
							: "fixed",
					});

					ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

					ScrollTrigger.refresh();

					// const animationTl = gsap.timeline();
					ScrollTrigger.create({
						scroller: "#smooth-scroll",
						trigger: ".hero",
						markers:true,
						start: "top center+=300px",
						end: "bottom center",

						onEnter: () => {
							gsap.to("body", { duration: 0.4, backgroundColor: "#000" });
						},
						onEnterBack: () => {
							gsap.to("body", { duration: 0.4, backgroundColor: "#000" });
						},

						// onLeaveBack: () => {
						//   gsap.to('body', { duration: 0.4, backgroundColor: '#000'})
						// },
					});
					ScrollTrigger.create({
						scroller: "#smooth-scroll",
						trigger: ".about",
						markers:true,
						start: "center center+=300px",
						end: "bottom center",

						onEnter: () => {
							gsap.to("body", { duration: 0.4, backgroundColor: "#703894" });
							gsap.to(".about", { duration: 0.5, opacity: 1 });
						},
						onEnterBack: () => {
							gsap.to("body", { duration: 0.4, backgroundColor: "#703894" });
							gsap.to(".about", { duration: 0.5, opacity: 1 });
						},
						onLeaveBack: () => gsap.to(".about", { duration: 0.5, opacity: 0 }),
						onLeave: () => {
							gsap.to(".about", { duration: 0.5, opacity: 0 });
						},
					});
					ScrollTrigger.create({
						scroller: "#smooth-scroll",
						trigger: ".Work",
						markers:true,
						start: "center center+=300px",
						end: "bottom center",
						onEnter: () => {
							gsap.to("body", { duration: 0.4, backgroundColor: "#DE243B" });
							gsap.to(".Work", { duration: 0.5, opacity: 1 });
						},
						onEnterBack: () => {
							gsap.to("body", { duration: 0.4, backgroundColor: "#DE243B" });
							gsap.to(".Work", { duration: 0.5, opacity: 1 });
						},
						onLeaveBack: () => gsap.to(".Work", { duration: 0.5, opacity: 0 }),
						onLeave: () => {
							gsap.to(".Work", { duration: 0.5, opacity: 0 });
						},
					});
					ScrollTrigger.create({
						scroller: "#smooth-scroll",
						trigger: ".Expertise",
						markers:true,
						start: "center center+=300px",
						end: "bottom center",
						onEnter: () => {
							gsap.to("body", { duration: 0.4, backgroundColor: "#000" });
							gsap.to(".Expertise", { duration: 0.5, opacity: 1 });
						},
						onEnterBack: () => {
							gsap.to("body", { duration: 0.4, backgroundColor: "#000" });
							gsap.to(".Expertise", { duration: 0.5, opacity: 1 });
						},
						onLeaveBack: () =>
							gsap.to(".Expertise", { duration: 0.5, opacity: 0 }),
						onLeave: () => {
							gsap.to(".Expertise", { duration: 0.5, opacity: 0 });
						},
					});
					ScrollTrigger.create({
						scroller: "#smooth-scroll",
						trigger: ".footer",
						markers:true,
						start: "center center+=300px",
						end: "center center",
						onEnter: () => {
							gsap.to("body", { duration: 0.4, backgroundColor: "#000" });
							gsap.to(".footer", { duration: 0.5, opacity: 1 });
						},
						onEnterBack: () => {
							gsap.to("body", { duration: 0.4, backgroundColor: "#000" });
							gsap.to(".footer", { duration: 0.5, opacity: 1 });
						},
						onLeaveBack: () =>gsap.to(".footer", { duration: 0.5, opacity: 0 }),

					});
				} catch (error) {
					throw Error(`[SmoothScrollProvider]: ${error}`);
				}
			})();
		}

		return () => {
			// tslint:disable-next-line:no-unused-expression
			scroll && scroll.destroy();
		};
	}, [scroll]); // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<SmoothScrollContext.Provider value={{ scroll }}>
			<div id="smooth-scroll" data-scroll-container ref={scrollWrapper}>
				{children}
			</div>
		</SmoothScrollContext.Provider>
	);
};
