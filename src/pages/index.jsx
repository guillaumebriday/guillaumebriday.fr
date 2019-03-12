import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default ({ data: { file } }) => (
  <div className="container py-16 mx-auto max-w-lg px-3">
    <div className="flex justify-center">
      <div className="flex flex-col">
        <Img
          fluid={file.childImageSharp.fluid}
          className="rounded-full w-32 mx-auto"
          alt="Photo de profil"
        />

        <h1 className="mr-4 text-3xl text-grey-darker font-normal mt-4">
          Guillaume <span className="font-extrabold text-black">BRIDAY</span>
        </h1>
      </div>
    </div>

    <div className="post-content text-grey-darker">
      <p>
        Je suis développeur Web avec l'envie de partager ce que j'aime sur ce
        blog. Tu y trouvera tous <Link to="/articles">les articles</Link> que
        j'écris au fil de mes recherches.
      </p>

      <p>
        Je travaille sur{' '}
        <a href="https://github.com/guillaumebriday">des projets open source</a>{' '}
        que tu peux retrouver sur Github.
      </p>

      <p>
        Le reste du temps, je suis passionné de{' '}
        <Link to="/photos">photographie</Link> et de voyages comme tu peux le
        voir sur <a href="https://instagram.com/guillaumebriday">Instagram</a>.
      </p>

      <p>
        N'hésite pas à venir discuter sur{' '}
        <a href="https://twitter.com/guillaumebriday">Twitter</a> ! 👋
      </p>

      <div className="flex justify-center my-8">
        <div className="w-full md:w-1/2 flex justify-between flex-wrap">
          <p className="w-1/2 md:w-auto text-center sm:mt-0 mt-4">
            <a href="https://github.com/guillaumebriday">
              <FontAwesomeIcon
                icon={['fab', 'github']}
                className="text-indigo mr-1"
              />{' '}
              GitHub
            </a>
          </p>

          <p className="w-1/2 md:w-auto text-center sm:mt-0 mt-4">
            <a href="https://twitter.com/guillaumebriday">
              <FontAwesomeIcon
                icon={['fab', 'twitter']}
                className="text-indigo mr-1"
              />{' '}
              Twitter
            </a>
          </p>

          <p className="w-1/2 md:w-auto text-center sm:mt-0 mt-4">
            <a href="https://instagram.com/guillaumebriday">
              <FontAwesomeIcon
                icon={['fab', 'instagram']}
                className="text-indigo mr-1"
              />{' '}
              Instagram
            </a>
          </p>

          <p className="w-1/2 md:w-auto text-center sm:mt-0 mt-4">
            <a href="https://www.linkedin.com/in/guillaumebriday">
              <FontAwesomeIcon
                icon={['fab', 'linkedin']}
                className="text-indigo mr-1"
              />{' '}
              Linkedin
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
)

export const query = graphql`
  {
    file(relativePath: { eq: "me.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 128, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
