import React from "react";
import { useState ,useEffect, useContext } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import Team from "../Team/Team";
import { SmoothScrollContext } from "../../Providers/SmoothScrollProvider";


function About() {
gsap.registerPlugin(ScrollTrigger);
	const [isOpen, setIsOpen] = useState(false)
	
	const openTeam = ()=>{
		setIsOpen(!isOpen)
	}
const scroll = useContext(SmoothScrollContext)
console.log(scroll);
	useEffect(() => {
		ScrollTrigger.update()
		console.log("updated")
	}, [isOpen])

	return (
		<div className={`about page`}>
			<div className="Page-heading">WHO &lt;WE&gt; ARE</div>
			<div className="Page-section">
				We are the hub of imagination. A bunch of crazy individuals who are
				always looking out for opportunities to express themselves creatively.
				We brew unconventional strategies, exquisite designs, and exceptional
				production. Voicing the essence of your brand, via our narratives. We
				believe in growing together.
			</div>
			<div className={`marquee team-slider`} onClick={openTeam}>
				<span>
					MEET THE TEAM &nbsp; &nbsp; MEET THE TEAM &nbsp; &nbsp; MEET THE TEAM
					&nbsp; &nbsp; MEET THE TEAM &nbsp; &nbsp; MEET THE TEAM &nbsp; &nbsp;
					MEET THE TEAM &nbsp; &nbsp; MEET THE TEAM &nbsp; &nbsp; MEET THE TEAM
					&nbsp; &nbsp; MEET THE TEAM &nbsp; &nbsp; MEET THE TEAM &nbsp; &nbsp;
				</span>
			</div>
				{isOpen && <Team isOpen={isOpen}/>}
		</div>
	);
}

export default About;
