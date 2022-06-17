import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
    <>
	<SEO title="404: Not found" />
	<h1 id="not-found-title" className="hero-text">404: Not Found</h1>
	<p id="not-found-text">You just hit a route that doesn&#39;t exist... the sadness.</p>
    </>
)

export default NotFoundPage
