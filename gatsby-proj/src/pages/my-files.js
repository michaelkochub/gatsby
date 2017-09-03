import React from "react"
import Link from "gatsby-link"

export default ({ data }) => {
	console.log(data)
  return (
    <div>
      <h1>My Site's Files</h1>
      <table>
        <thead>
          <tr>
            <th>relativePath</th>
            <th>prettySize</th>
            <th>extension</th>
            <th>birthTime</th>
          </tr>
        </thead>
        <tbody>
          {data.allFile.edges.map(({ node }) =>
            <tr>
              <td>
		            <Link
			            to={node.relativePath.slice(0,-3).split("/").slice(1).join("/")}
			            css={{ textDecoration: `none`, color: `inherit` }}
		          	>
                	{node.relativePath}
              	</Link>
              </td>
              <td>
                {node.prettySize}
              </td>
              <td>
                {node.extension}
              </td>
              <td>
                {node.birthTime}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export const query = graphql`
	query MyFilesQuery {
	  allFile {
	    edges {
	      node {
	      	name
	        relativePath
	        prettySize
	        extension
	        birthTime(fromNow: true)
	      }
	    }
	  }
	}
`