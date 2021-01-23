import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const FooterInner = styled.footer`
  grid-row-start: 2;
  grid-row-end: 3;
  max-width: 960px;
  margin: 25px auto;
  text-align: center;
  width: 100%;
  border-width: 0;
  border-top: 1px solid #E1E1E1;
  padding: 20px 0;
  font-size: 14px;
  color: #bfbfbf;

  a {
    color: #bfbfbf;
  }
`

const Footer = () => {
  return(
    <FooterInner>
      <p>
      © {new Date().getFullYear()} Samuel Tonini | <a href="/impressum">Impressum</a>
      </p>  
    </FooterInner>
  )
}

export default Footer