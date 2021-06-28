import React from "react";
import HeroImg from "../../images/HeroLogo.svg";

function Hero() {
	return (
		<div className="page hero">
			<div className="heading-text" 	 >
				<span
					data-scroll
					data-scroll-speed="5"
					data-scroll-position="top"
					data-scroll-direction="horizontal"
					data-scroll-repeat="true"
          
				>
					<span className="stencilled">CREATIVITY </span>IS
				</span>

					<span
						data-scroll
						data-scroll-speed="3"
						data-scroll-position="top"
						data-scroll-direction="horizontal"
						className="bigCrimson"
					>
						DISCOVERING
					</span>
				<span
					data-scroll
					data-scroll-speed="4"
					data-scroll-position="top"
					data-scroll-direction="horizontal"
				>
					THAT
				</span>
				<span
					data-scroll
					data-scroll-speed="6"
					data-scroll-position="top"
					data-scroll-direction="horizontal"
				>
					<span className="bigPurple">ORDINARY </span>
				</span>
				<span
					data-scroll
					data-scroll-speed="3"
					data-scroll-position="top"
					data-scroll-direction="horizontal"
				>
					IS A MYTH
				</span>
			</div>
			<div className="hero-image">
				<img src={HeroImg} alt="company-logo" 	data-scroll
					data-scroll-speed="-7"
          data-scroll-
					data-scroll-position="top"
					data-scroll-direction="horizontal" width="400px" />
			</div>
		</div>
	);
}

export default Hero;
