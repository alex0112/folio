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

const ProjectGrid = ({projects}) => {
  return projects.map((project) =>
      // <Col xs={1} sm={2} md={3} lg={3} className="square">
      // 	  <ProjectTile project={project}/>
      // </Col>

      <div className="tile-row">
	  <ProjectTile project={project}/>
      </div>
  );
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

const IndexPage = () => (
    <div id="main">
	<div id="hero-section" className="paralax">
	    <div id="hero-box">
		<h1 className="hero-text">Alex Larsen</h1>
		<button id="hire-me" className="call-btn">Hire Me</button>
		<button id="see-my-work" className="call-btn hvr-icon-hang">
		    <Link to="projects" smooth={true} duration={1500}>See My Work <FontAwesomeIcon icon={faChevronDown} className="hvr-icon"/>
		    </Link>
		    </button>
	    </div>
	</div>
	
	<div id="projects">
	    <h1 className="hero-text header-row">Projects I've Worked On</h1>
	    <ProjectGrid projects={project_data} />
	</div>

	<div id="test" className="paralax">
	    
	</div>
    </div>
);

export default IndexPage;
