import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from "../../images/slider/Slide-1.png";
import slide2 from "../../images/slider/slide-2.png";
import slide3 from "../../images/slider/slide-3.png";
import slide4 from "../../images/slider/slide-4.png";
import slide5 from "../../images/slider/slide-5.png";
import "swiper/swiper.scss";

function Slider() {
	return (
		<div className="slider">
			<div className="Page-heading">WHAT &lt;WE&gt; HAVE DONE</div>
			<div className="indicator">
				01 &nbsp;<span className="dash"></span>&nbsp; 02
			</div>
			<Swiper data-scroll data-scroll-direction="horizontal" className="mySwiper">
				<SwiperSlide  className="slide-1">
					<img src={slide1} alt="" />
					<div className="slideCaptions">
						<span>WHEN WE</span> <br />
						<span className="Slidestencil">HUSTLE</span>
						<div className="content">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
							sed. Placeat soluta eius vel dolorem perferendis corporis dolorum
							officiis nulla!
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="slide-2">
					<img src={slide2} alt="" />
					<div className="slideCaptions">
						<span >WHEN WE</span> <br />
						<span className="Slidestencil">HUSTLE</span>
						<div className="content">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
							sed. Placeat soluta eius vel dolorem perferendis corporis dolorum
							officiis nulla!
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="slide-3">
					<img src={slide3} alt="" />
					<div className="slideCaptions">
						<span >WHEN WE</span> <br />
						<span className="Slidestencil">HUSTLE</span>
						<div className="content">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
							sed. Placeat soluta eius vel dolorem perferendis corporis dolorum
							officiis nulla!
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="slide-4">
					<img src={slide4} alt="" />
					<div className="slideCaptions">
						<span >WHEN WE</span> <br />
						<span className="Slidestencil">HUSTLE</span>
						<div className="content">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
							sed. Placeat soluta eius vel dolorem perferendis corporis dolorum
							officiis nulla!
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="slide-5">
					<img src={slide5} alt="" />
					<div className="slideCaptions">
						<span >WHEN WE</span> <br />
						<span className="Slidestencil">HUSTLE</span>
						<div className="content">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
							sed. Placeat soluta eius vel dolorem perferendis corporis dolorum
							officiis nulla!
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
}

export default Slider;
