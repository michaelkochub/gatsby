import React from "react"

class BasicTodo extends React.Component {
	constructor(props) {
		super(props)
		this.state = { todos: ["read", "sleep", "run"] }
	}

	render() {
		return (
			<div>
				<h1>{"Basic Todo List"}</h1>
				<button onClick={() => this.setState({ todos: [...this.state.todos, this.state.todos[Math.floor(Math.random() * this.state.todos.length)]] })}>Add</button>
				<button onClick={() => this.setState({ todos: this.state.todos.slice(0, -1) })}>Delete Last</button>
				<button onClick={() => this.setState({ todos: ["read", "sleep", "run"] })}>Reset</button>
				<h2 />
				<h3># of Tasks: {this.state.todos.length}</h3>
				<ol>
				{this.state.todos.map(todo => 
					<li>
						{todo}
					</li>
				)}
				</ol>
			</div>
		)
	}
}

export default BasicTodo