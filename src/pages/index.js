import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import {Container, Row, Col, Button} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';

const project_data = [
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
}

const IndexPage = () => (
    // <Layout>
    // 	<SEO title="Alex Larsen" />
    <Container fluid id="main-container">
	<Row id="hero" className="justify-content-center">
	    <span id="call-buttons">
		<Col xs={1} sm={2} md={2} lg={2}>
		    <Button variant="warning" className="hero-button">Hire Me</Button>
		</Col>
		
		<Col xs={1} sm={2} md={2} lg={2}>
		    <Button variant="warning" className="hero-button">See My Work</Button>
		</Col>
	    </span>
	</Row>

	<Row id="projects" className="justify-content-center">
	    <ProjectRow projects={project_data} />
	</Row>
    </Container>
//    </Layout>
)

export default IndexPage;
