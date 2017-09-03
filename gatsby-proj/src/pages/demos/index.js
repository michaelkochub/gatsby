import React from "react"
import Link from "gatsby-link"

export default ({ data }) => {
	return (
		<div style={{ color: `tomato` }}>
			<p>Hello! I am sailor monkey. Below me are some react component demos!</p>
			<img style={{ width: `96px`, height: `96px` }} src="http://www.clker.com/cliparts/a/4/6/5/11949837501222258869sailor_monkey_nicu_bucul_01.svg.med.png" />
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Relative Path</th>
					</tr>
				</thead>
				<tbody>
					{data.allFile.edges
						.filter(({ node }) => node.name !== "index")
						.map(({ node }) => 
							<tr>
								<td>
									{node.name}
								</td>
								<td>
									<Link 
										to={node.relativePath.slice(0,-3).split("/").slice(1).join("/")}
									>
										{node.relativePath}
									</Link>
								</td>
							</tr>
					)}
				</tbody>
			</table>
		</div>
	)		
}

export const query = graphql`
	query DemoQuery {
		allFile(filter: {relativePath: { regex: "/.*demos\//i"} },
						sort: {fields: [name], order: ASC} ) {
		  edges {
		    node {
		      relativePath
	    		name
		    }
		  }
		}
	}
`