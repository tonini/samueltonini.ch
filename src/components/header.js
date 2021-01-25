import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const InnerHeader = styled.header`
  margin-bottom: 0px;
`

const Inner = styled.div`
  max-width: 960px;
  margin: 0 auto;
  text-align: center;
`

const Logo = styled.div`
  margin: 0;
  padding: 20px;
`

const Heading = styled.div`
  margin: 0;
  font-family: Cinzel;
  color: #555;

  h1 {
    margin: 0;
    font-weight: 400;
  }

  h2 {
    margin: 0;
    font-weight: 400;
  }
`

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo_hex_555555.png" }) {
        childImageSharp {
          fixed(width: 169, height: 164) {
            ...GatsbyImageSharpFixed_noBase64
          }
        }
      }
    }
  `)

  return (
    <InnerHeader>
      <Inner>
        <Logo>
          <Link to="/">
            <Img fixed={data.file.childImageSharp.fixed} alt="Logo" />
          </Link>
        </Logo>
        <Heading>
          <h1>Samuel Tonini</h1>
          <h2>Praxis für Chinesische Medizin</h2>
        </Heading>
      </Inner>
    </InnerHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
