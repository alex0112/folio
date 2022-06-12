import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeBranch, faFeatherPointed, faDollarSign} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

const HeroBox = () => {
    return(
	<div id="hero-box">
	    <h1 className="hero-text">Alex Larsen</h1>
	    <div id="call-btns">

		<a href="/hire-me" className="hvr-float">
		    <button id="hire-me" className="call-btn">
			Hire Me <FontAwesomeIcon icon={faDollarSign} />
		    </button>
		</a>

		<a href="https://github.com/alex0112" className="hvr-shrink">
		    <button id="see-my-work" className="call-btn">
			See My Work <FontAwesomeIcon icon={faCodeBranch} />
		    </button>
		</a>

		<a href="https://www.linkedin.com/in/kingsfoil" className="hvr-sink"> 
		    <button id="view-linkedin" className="call-btn">
			LinkedIn <FontAwesomeIcon icon={faLinkedin} size="xl" />
		    </button>
		</a>

		<a href="/contact" className="hvr-grow">
		    <button id="contact-me" className="call-btn">
			Contact <FontAwesomeIcon icon={faFeatherPointed} />
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
