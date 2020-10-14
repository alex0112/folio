import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import {Container, Row, Col, Button} from "react-bootstrap"


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

const ProjectRow = () => (
    <Row>
	
    </Row>
)

const IndexPage = () => (
    // <Layout>
    // 	<SEO title="Alex Larsen" />

    <Container fluid>
	<Button variant="danger">Danger</Button>

	<Row>
	    <Col xs={1} sm={2} md lg className="square">1 of 3</Col>
	    <Col xs={1} sm={2} md lg className="square">1 of 3</Col>
	    <Col xs={1} sm={2} md lg className="square">1 of 3</Col>
	</Row>

    </Container>
//    </Layout>
)

export default IndexPage
