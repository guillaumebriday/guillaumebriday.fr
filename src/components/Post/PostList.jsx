import React from 'react'
import { Link } from 'gatsby'

const PostList = ({ posts }) => (
  <ul>
    {posts
      .filter((post) => post.node.frontmatter.title.length > 0)
      .map(({ node: post }) => (
        <li className="mb-8" key={post.id}>
          <Link to="/categories" className="btn btn--lightest btn--sm">
            {post.frontmatter.category}
          </Link>

          <h2 className="font-semibold mb-0 mt-2 leading-tight">
            <Link
              to={post.fields.slug}
              className="text-black"
              hrefLang={post.fields.lang}
            >
              <span>{post.frontmatter.title}</span>
            </Link>
          </h2>

          <div className="text-gray-700 text-sm">
            Le{' '}
            <span className="font-light" content={post.fields.datePublished}>
              {post.fields.date}
            </span>
          </div>
        </li>
      ))}
  </ul>
)

export default PostList
