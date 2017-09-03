import React from "react"

class Counter extends React.Component {
	constructor(props) {
		super(props)
		this.state = { count: this.props.initCount || 0 }
	}

	render() {
		return (
			<div>
				<h1>{this.props.title || "Counter"}</h1>
				<p>current count: {this.state.count}</p>
				<button onClick={() => this.setState({ count: this.state.count + 1 })}>plus</button>
				<button onClick={() => this.setState({ count: this.state.count - 1 })}>minus</button>
			</div>
		)
	}
}

export default () => <Counter title="My Counter" initCount={3} />