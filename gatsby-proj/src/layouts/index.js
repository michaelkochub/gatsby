import React from "react"
import g from "glamorous"
import { css } from "glamor"
import Link from "gatsby-link"

import { rhythm } from "../utils/typography"

const linkStyle = css({ float: `right` })

export default ({ children, data }) =>
  <g.Div
    margin={`0 auto`}
    maxWidth={700}
    padding={rhythm(2)}
    paddingTop={rhythm(1.5)}
  >
    <Link to={`/`}>
      <g.H3
        marginBottom={rhythm(2)}
        display={`inline-block`}
        fontStyle={`normal`}
      >
        {data.site.siteMetadata.title}
      </g.H3>
    </Link>
    <Link className={linkStyle} to={`/about/`} margin={`0 1rem 0 0`}>
      <g.H5
        margin={`0 1rem 0 0`}
        display={`inline-block`}
      >
        About
      </g.H5>
    </Link>
    <Link className={linkStyle} to={`/demos/`}>
      <g.H5
        margin={`0 1rem 0 0`}
        display={`inline-block`}
      >
        Demos
      </g.H5>
    </Link>
    {children()}
  </g.Div>

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`