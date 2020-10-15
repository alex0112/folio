import React from "react"

import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Button} from "react-bootstrap";


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
    <Container fluid>
	<Row id="hero">
	    <Row>
		<Col className="hero-col">
		    <h1 className="hero-text">Alex Larsen</h1>
		    <Button variant="warning" className="call-button">Hire Me</Button>
		    <Button variant="warning" className="call-button">See My Work</Button>
		</Col>
	    </Row>
	</Row>
	<Row id="projects" className="justify-content-center">
	    <ProjectRow projects={project_data} />
	</Row>
	</Container>
);

export default IndexPage;
