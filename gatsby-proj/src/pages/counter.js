import React from "react"
import Link from "gatsby-link"

import Container from "../components/container"

class Counter extends React.Component {
	constructor() {
		super()
		this.state = { count: 0 }
	}

	render() {
		return (
			<Container>
				<h1>Counter</h1>
				<p>current count: {this.state.count}</p>
				<button onClick={() => this.setState({ count: this.state.count + 1 })}>plus</button>
				<button onClick={() => this.setState({ count: this.state.count - 1 })}>minus</button>
                <br />
                <Link to="/">Back</Link>
			</Container>	
		)
	}
}

export default Counter	
