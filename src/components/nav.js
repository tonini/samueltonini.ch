import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const Menu = styled.nav`
  grid-row-start: 2;
  grid-row-end: 3;
  max-width: 960px;
  margin: 20px auto 0 auto;
  width: 100%;
  align-items: center;

  ul {
    list-style-type: none;
    justify-content: space-between;
    display: flex;
    margin: 0;
    padding: 0;
    align-items: center;
    width: 100%;
    max-width: 960px;
  }

  @media (max-width: 400px) {
    ul {
      text-align: center;
      display: block;
    }
  }

  @media (max-width: 600px) {
    ul {
      text-align: center;
      display: block;
    }
  }

  ul li {
    margin: 0 30px;
  }

  ul li a {
    text-decoration: none;
    font-family: Lora, serif;
    font-size: 11px;
    color: #555;
    letter-spacing: .2rem;
    text-transform: uppercase;
    font-weight: 600;

    &:hover {
      color: #000;
      text-decoration: underline;
    }
  }

`

const Nav = () => {
  return(
      <Menu>
        <hr />
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">Über mich</a></li>
          <li><a href="/therapie">Behandlung</a></li>
          <li><a href="/indikationen">Indikationen</a></li>
          <li><a href="/kosten">Kosten</a></li>
          <li><a href="/kontakt">Kontakt</a></li>
        </ul>
        <hr />
    </Menu>
  )
}

export default Nav