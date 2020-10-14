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
    },
    {
	name: "Yggdrasil",
	subtext: "Yggdrasil is a fun little side project I've been working on for...",
	img_path: '../images/yggdrasil.jpg',
    },

    {
	name: "Yggdrasil",
	subtext: "Yggdrasil is a fun little side project I've been working on for...",
	img_path: '../images/yggdrasil.jpg',
    },

    {
	name: "Yggdrasil",
	subtext: "Yggdrasil is a fun little side project I've been working on for...",
	img_path: '../images/yggdrasil.jpg',
    },

    {
	name: "Yggdrasil",
	subtext: "Yggdrasil is a fun little side project I've been working on for...",
	img_path: '../images/yggdrasil.jpg',
    },
];

const ProjectRow = ({projects}) => {
  return projects.map((project) =>
	<Col xs={1} sm={2} md lg className="square">{project.name}</Col>);
};

const IndexPage = () => (
    // <Layout>
    // 	<SEO title="Alex Larsen" />

    <Container fluid>
	<Button variant="danger">Danger</Button>

	<Row>
	    <ProjectRow projects={project_data} />
	</Row>

    </Container>
//    </Layout>
)

export default IndexPage;
