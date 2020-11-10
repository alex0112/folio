import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import {Container, Row, Col, Button} from "react-bootstrap";

const project_data = [
    {
	name: "Yggdrasil",
	subtext: "Yggdrasil is a fun little side project I've been working on for...",
	img_path: '../images/yggdrasil.jpg',
	page: "/yggdrasil",
    },
    {
	name: "Infocoin",
	subtext: "Interact with an API and calculate the ROI on different cryptographic assets...",
	img_path: '../images/yggdrasil.jpg',
	page: "/yggdrasil",
    },
    {
	name: "Aurum",
	subtext: "A small foray into the world of functional programming and HMAC authentication...",
	img_path: '../images/yggdrasil.jpg',
	page: "/yggdrasil",
    },
    {
	name: "Yggdrasil",
	subtext: "Yggdrasil is a fun little side project I've been working on for...",
	img_path: '../images/yggdrasil.jpg',
	page: "/yggdrasil",
    },
    {
	name: "Yggdrasil",
	subtext: "Yggdrasil is a fun little side project I've been working on for...",
	img_path: '../images/yggdrasil.jpg',
	page: "/yggdrasil",
    },
    {
	name: "Yggdrasil",
	subtext: "Yggdrasil is a fun little side project I've been working on for...",
	img_path: '../images/yggdrasil.jpg',
	page: "/yggdrasil",
    },
    {
	name: "Yggdrasil",
	subtext: "Yggdrasil is a fun little side project I've been working on for...",
	img_path: '../images/yggdrasil.jpg',
	page: "/yggdrasil",
    },
    {
	name: "Yggdrasil",
	subtext: "Yggdrasil is a fun little side project I've been working on for...",
	img_path: '../images/yggdrasil.jpg',
	page: "/yggdrasil",
    },
    {
	name: "Yggdrasil",
	subtext: "Yggdrasil is a fun little side project I've been working on for...",
	img_path: '../images/yggdrasil.jpg',
	page: "/yggdrasil",
    },
    {
	name: "Yggdrasil",
	subtext: "Yggdrasil is a fun little side project I've been working on for...",
	img_path: '../images/yggdrasil.jpg',
	page: "/yggdrasil",
    },
    {
	name: "Yggdrasil",
	subtext: "Yggdrasil is a fun little side project I've been working on for...",
	img_path: '../images/yggdrasil.jpg',
	page: "/yggdrasil",
    },
    {
	name: "Yggdrasil",
	subtext: "Yggdrasil is a fun little side project I've been working on for...",
	img_path: '../images/yggdrasil.jpg',
	page: "/yggdrasil",
    },
    {
	name: "Yggdrasil",
	subtext: "Yggdrasil is a fun little side project I've been working on for...",
	img_path: '../images/yggdrasil.jpg',
	page: "/yggdrasil",
    },
    {
	name: "Yggdrasil",
	subtext: "Yggdrasil is a fun little side project I've been working on for...",
	img_path: '../images/yggdrasil.jpg',
	page: "/yggdrasil",
    },
    {
	name: "Yggdrasil",
	subtext: "Yggdrasil is a fun little side project I've been working on for...",
	img_path: '../images/yggdrasil.jpg',
	page: "/yggdrasil",
    },
    {
	name: "Yggdrasil",
	subtext: "Yggdrasil is a fun little side project I've been working on for...",
	img_path: '../images/yggdrasil.jpg',
	page: "/yggdrasil",
    },
    {
	name: "Yggdrasil",
	subtext: "Yggdrasil is a fun little side project I've been working on for...",
	img_path: '../images/yggdrasil.jpg',
	page: "/yggdrasil",
    },
    {
	name: "Yggdrasil",
	subtext: "Yggdrasil is a fun little side project I've been working on for...",
	img_path: '../images/yggdrasil.jpg',
	page: "/yggdrasil",
    },
    {
	name: "Yggdrasil",
	subtext: "Yggdrasil is a fun little side project I've been working on for...",
	img_path: '../images/yggdrasil.jpg',
	page: "/yggdrasil",
    },
    {
	name: "Yggdrasil",
	subtext: "Yggdrasil is a fun little side project I've been working on for...",
	img_path: '../images/yggdrasil.jpg',
	page: "/yggdrasil",
    },
];

const ProjectsHeader = () => {
    return(
	<div id="project-grid-header">
	    <h1>Projects I've Worked On</h1>
	</div>
    );
};

const ProjectTiles = ({projects}) => {
    return(
	projects.map((project) =>
	    <ProjectTile project={project}/>
	)
    );
};

const ProjectGrid = ({projects}) => {
    return [<ProjectsHeader />].concat(<ProjectTiles projects={projects} />);
};

const ProjectTile = ({project}) => {
    return(
	<div className="">
	    <a href={project.page}>
		<h4>{project.name}</h4>
		<p>{project.subtext}</p>
	    </a>
	</div>
    );
};

const HeroBox = () => {
    return(
	<div id="hero-box">
	    <h1 className="hero-text">Alex Larsen</h1>
	    <div id="call-btns">
		<button id="hire-me" className="call-btn">Hire Me</button>
		<button id="see-my-work" className="call-btn hvr-icon-hang">
		    <Link to="projects" smooth={true} duration={1500}>See My Work <FontAwesomeIcon icon={faChevronDown} className="hvr-icon"/>
		    </Link>
		</button>
	    </div>
	</div>
    );
};

const IndexPage = () => (
    <main>
	<section id="hero-section" className="paralax">
	    <HeroBox />
	</section>
	
	<section id="projects">
	    <ProjectGrid projects={project_data} />
	</section>
    </main>
);

export default IndexPage;
