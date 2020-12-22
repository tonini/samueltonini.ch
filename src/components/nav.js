import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const Menu = styled.nav`
  grid-row-start: 2;
  grid-row-end: 3;
  max-width: 960px;
  margin: 20px auto;
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

  ul li {
    margin: 0 35px;
  }

  ul li a {
    text-decoration: none;
    font-family: Lora, serif;
    font-size: 11px;
    color: #161650;
    letter-spacing: .2rem;
    text-transform: uppercase;
    font-weight: 600;

    &:hover {
      color: #0FA0CE;
    }
  }

`

const Nav = () => {
  return(
      <Menu>
        <hr />
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Über mich</a></li>
          <li><a href="#">Methoden</a></li>
          <li><a href="#">Indikationen</a></li>
          <li><a href="#">Behandlung</a></li>
          <li><a href="#">Kontakt</a></li>
        </ul>
        <hr />
    </Menu>
  )
}

export default Nav