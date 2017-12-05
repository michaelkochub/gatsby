import React from "react"

class BasicTodo extends React.Component {
	constructor(props) {
		super(props)
		this.state = { todos: ["read", "sleep", "run"] }
	}

	increment() {
		this.setState({ todos: [...this.state.todos, this.state.todos[Math.floor(Math.random() * this.state.todos.length)]] })		
	}

	// To use this, set onClick={this.increment} for the Add button
	// increment = () => {
	// 	this.setState({ todos: [...this.state.todos, this.state.todos[Math.floor(Math.random() * this.state.todos.length)]] })		
	// }

	render() {
		return (
			<div>
				<h1>{"Basic Todo List"}</h1>
				<button onClick={this.increment.bind(this)}>Add</button>
				<button onClick={() => this.setState({ todos: this.state.todos.slice(0, -1) })}>Delete Last</button>
				<button onClick={() => this.setState({ todos: ["read", "sleep", "run"] })}>Reset</button>
				<h2 />
				<h3># of Tasks: {this.state.todos.length}</h3>
				<ol>
				{this.state.todos.map((todo, i) => 
					// Usually this isn't recommended but items are only ever appended to the end of the array
					<li key={i}>
						{todo}
					</li>
				)}
				</ol>
			</div>
		)
	}
}

export default BasicTodo