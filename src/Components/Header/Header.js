import React, { useState } from "react";
import Navigation from "./Navigation";
import Logo from "../../images/HubhawksLogo.svg"
import NavToggle from "./NavToggle";

function Header() {
	const [navOpen, setNavOpen] = useState(false);
	const [navIsAnimating, setNavIsAnimating] = useState(false);

	const toggleNav = (event) => {
		event.preventDefault();
		if (event) {
			event.preventDefault();
			setNavIsAnimating(false);
		}
		if (navOpen) {
			document.body.classList.remove("nav-open");
		}
		if (!navOpen) {
			document.body.classList.add("nav-open");
		}

		setTimeout(() => {
			setNavIsAnimating(false);
			setNavOpen(!navOpen);
		}, 500);
	};

	// const openNav = (event) => {
	// 	if (event) event.preventDefault();

	// 	document.body.classList.add("nav-open");

	// 	setNavOpen(true);
	// };

	const closeNav = () => {
		document.body.classList.remove("nav-open");
		setNavOpen(true);
	};

	return (
		<div className="layout">
			<div className="brandLogo">
				<img src={Logo} alt="logo" width="200px"/>
			</div>
			<NavToggle
				navOpen={navOpen}
				toggleNavHandler={(event) => toggleNav(event)}
				navIsAnimating={navIsAnimating}
			/>
			<Navigation
				navOpen={navOpen}
				navIsAnimating={navIsAnimating}
				closeNav={(event) => closeNav(event)}
				toggleNavHandler={(event) => toggleNav(event)}
			/>
		</div>
	);
}

export default Header;
