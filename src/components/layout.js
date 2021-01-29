/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import CookieConsent from "react-cookie-consent"

import Header from "./header"
import Nav from "./nav"
import Footer from "./footer"
import "normalize.css"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div className="site">
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <Nav />
        <main class="site-content">{children}</main>
        <Footer />

        <CookieConsent
          containerClasses="cookie"
          location="bottom"
          buttonText="Fort­fah­ren"
          declineButtonText="Decline"
          cookieName="gatsby-gdpr-samuel-tonini"
        >
          Um unsere Webseite für Sie optimal zu gestalten
          und fortlaufend zu verbessern, verwenden wir Cookies. Durch die
          weitere Nutzung der Webseite stimmen Sie der Verwendung von Cookies
          zu.
        </CookieConsent>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
