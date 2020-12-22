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
  padding: 30px;
`

const Heading = styled.div`
  margin: 0;
  font-family: Cinzel;
  color: #161650;

  h1 {
    margin-top: 0;
    margin-bottom: 10px;
    font-weight: 400;
  }

  h2 {
    margin: 0;
    font-weight: 400;
  }

`

const HomeLink = styled(Link)`
  text-decoration: none;
  color: #161650;
`

const Header = ({ siteTitle}) => {

  const data = useStaticQuery(graphql`
  query {
    file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fixed(width: 169, height: 164) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
  `)  

 return(
   <InnerHeader>
    <Inner>
      <Logo>
         <Img fixed={data.file.childImageSharp.fixed} alt="Logo"/>
      </Logo>
      <Heading>
        <h1>Samuel Tonini</h1>
        <h2>Therapeut der Chinesischen Medizin</h2>
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
