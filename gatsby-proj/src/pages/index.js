import React from "react"
import Link from "gatsby-link"

import Container from "../components/container"

export default () => 
    <Container>
        <h1>Hello Koch 🎉</h1>
        <h2>REALLY Testing out the build...</h2>
        <p>What a day...</p>
        <img src="http://lorempixel.com/400/200/" />
        <br />
        <Link to="/page-2/">Link</Link>
        <br />
        <Link to="/counter/">Counter</Link>
        <br />
        <Link to="/about-css-modules/">About css modules</Link>
    </Container>
