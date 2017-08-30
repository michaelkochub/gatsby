import React from "react"
import Link from "gatsby-link"

export default () => 
	<div style={{ color: `tomato` }}>
		<h1>Hello Koch 🎉</h1>
		<p>What a day...</p>
		<img src="http://lorempixel.com/400/200/" />
		<br />
		<Link to="/page-2/">Link</Link>
		<br />
		<Link to="/counter/">counter</Link>
	</div>
