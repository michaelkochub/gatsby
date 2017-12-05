import React from "react"
import axios from "axios"
import Link from "gatsby-link"
import shuffle from "shuffle-array"

class CountryList extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			quiz: [],
			text: "",
			index: 0,
			numQuestions: 0,
			score: 0,
			answers: [],
			completed: false
		}
	}

	componentDidMount() {
		axios.get('https://restcountries.eu/rest/v2/all')
			.then(res => {
				this.setState({ quiz: shuffle(res.data) })
				this.setState({ numQuestions: this.state.quiz.length })
			});
	}

	render() {
		return (
			<div>
				<h1>{this.state.numQuestions} countries in total</h1>
					<table>
						<thead>
							<tr>
								<th>Country</th>
								<th>Capital</th>
							</tr>
						</thead>
						{this.state.quiz.map(country => 
							<tr>
								<td>
									<a href={`https://en.wikipedia.org/wiki/${country.name}`}>
										{country.name}
									</a>
								</td>
								<td>
									<a href={`https://en.wikipedia.org/wiki/${country.capital}`}>
										{country.capital}
									</a>
								</td>
							</tr>
						)}
					</table>
			</div>
		);
	}	
}

export default CountryList