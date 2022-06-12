import React from "react";

const HeroBox = () => {
    return(
	<div id="hero-box">
	    <h1 className="hero-text">Alex Larsen</h1>
	    <div id="call-btns">

		<a href="/hire-me" className="hvr-float">
		    <button id="hire-me" className="call-btn">
			Hire Me
		    </button>
		</a>

		<a href="https://github.com/alex0112" className="hvr-shrink">
		    <button id="see-my-work" className="call-btn">
			See My Work 
		    </button>
		</a>

		<a href="https://www.linkedin.com/in/alex-larsen-a581808b/" className="hvr-sink"> 
		    <button id="view-linkedin" className="call-btn">
			View LinkedIn
		    </button>
		</a>

		<a href="/contact" className="hvr-grow">
		    <button id="contact-me" className="call-btn">
			Contact Me
		    </button>
		</a>
	    </div>
	</div>
    );
};

const IndexPage = () => (
    <main>
	<section id="hero-section" className="">
	    <HeroBox />
	</section>
	
	<section id="projects">
	    
	</section>
    </main>
);

export default IndexPage;
