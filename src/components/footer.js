import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const FooterInner = styled.footer`
  grid-row-start: 2;
  grid-row-end: 3;
  max-width: 960px;
  margin: 25px auto;
  text-align: center;
  width: 100%;
  border-width: 0;
  border-top: 1px solid #e1e1e1;
  padding: 20px 0;
  font-size: 14px;
  color: #bfbfbf;

  a {
    color: #bfbfbf;
  }
`

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "emr_zertifiziert_gs.png" }) {
        childImageSharp {
          fixed(width: 140) {
            ...GatsbyImageSharpFixed_noBase64
          }
        }
      }
    }
  `)
  return (
    <FooterInner>
      <div class="emr">
        <a
          href="https://www.emr.ch/therapeut/samuel.tonini"
          target="_blank"
          rel="noreferrer"
          title="Samuel Tonini - EMR Zertifiziert"
        >
          <Img fixed={data.file.childImageSharp.fixed} alt="EMR Zertifiziert" />
        </a>
      </div>
      <div class="footer-info">
        Copyright © {new Date().getFullYear()} Samuel Tonini |{" "}
        <Link to="/impressum">Impressum</Link>
      </div>
    </FooterInner>
  )
}

export default Footer
