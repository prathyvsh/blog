/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import SocialLogo from "social-logos"

import { rhythm } from "../utils/typography"

const Bio = () => {
function clickSocialLink(url) {
    window.open(url, "_blank");
}

  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpeg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
            github
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p>
        Personal Blog of <strong>{author}</strong> who is an Undergraduate Engineering Student in 
        College of Engineering Kidangoor, a <i>GitHub Campus Expert</i> and a Python, Js lover.<br></br>
        {` `}
	You can find him on<br></br>
	<span style={{color:`azure`}}>
		<SocialLogo icon="twitter" size={48} />
	</span>
	<span style={{ color:`black` }}>
		<SocialLogo icon="github" size={48} />
	</span>
      </p>
    </div>
  )
}

export default Bio
