import React from "react"

import 'bootstrap/dist/css/bootstrap.min.css';
import "react-awesome-button/dist/styles.css";

import {Container, Row, Col} from "react-bootstrap";
import { AwesomeButton } from "react-awesome-button";

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

const ProjectRow = ({projects}) => {
  return projects.map((project) =>
      <Col xs={1} sm={2} md={3} lg={3} className="square">
	  <ProjectTile project={project}/>
      </Col>
  );
};

const ProjectTile = ({project}) => {
    return(
	<a href={project.page}>
	    <div>
		<h4>{project.name}</h4>
		<p>{project.subtext}</p>
	    </div>
	</a>
    );
};

const IndexPage = () => (
    // <Layout>
    // 	<SEO title="Alex Larsen" />
    <Container fluid id="main-container">
	<Row id="hero" className="justify-content-center">
	    <div id="call-buttons">
		<Col xs={1} sm={2} md={2} lg={2}>
		    <AwesomeButton type="secondary">Hire Me</AwesomeButton>;
		</Col>
		
		<Col xs={1} sm={2} md={2} lg={2}>
		    <AwesomeButton type="secondary">See My Work</AwesomeButton>;
		</Col>
	    </div>
	</Row>

	<Row id="projects" className="justify-content-center">
	    <ProjectRow projects={project_data} />
	</Row>
    </Container>
//    </Layout>
)

export default IndexPage;
