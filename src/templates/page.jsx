import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

export default ({ data: { markdownRemark: page, site } }) => (
  <>
    <Helmet title={`${page.frontmatter.title} | ${site.siteMetadata.title}`} />

    <div className="container px-3 py-16 mx-auto max-w-lg">
      <h1>{page.frontmatter.title}</h1>

      <div
        className="post-content leading-loose"
        itemProp="articleBody"
        dangerouslySetInnerHTML={{ __html: page.html }}
      />
    </div>
  </>
)

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }

    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
