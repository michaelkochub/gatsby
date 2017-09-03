import React from "react"

const HelloWorld = props => <h1>{props.title || "Hello World"}</h1>

export default () => <HelloWorld title="Hello Koch 👀" />