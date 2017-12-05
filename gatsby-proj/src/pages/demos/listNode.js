import React from "react"

class ListNode extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return <li>{this.props.todo}</li>
	}
}

export default ListNode