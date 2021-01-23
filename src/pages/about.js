import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Img from "gatsby-image"

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "samuel.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 250, maxHeight: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Über mich" />
      <div class="site-half">
        <div class="col-70">
          <h1>Über mich</h1>
          <p>
            Seit meiner Jugend prägt Bewegung mein Leben und ich blicke unter
            anderem auf eine 15 jährige Tätigkeit als Tanzlehrer zurück.{" "}
          </p>
          <p>
            Der Tanz öffnete mir die Türen zu einem tiefen Verständnis des
            eigenen Körpers. Diese Erfahrung bereichert und unterstützt mein
            Verständnis der Behandlungsmethoden der Chinesischen Medizin, das
            heisst Tuina sowie Akupunktur.
          </p>
          <p>
            Mit gleichem Interesse wie ich mich vor langer Zeit dem Tanz
            verschrieben habe, widme ich mich nun seit mehreren Jahren intensiv
            dem Studium der Chinesischen Medizin. Durch die Auseinandersetzung
            auch mit der chinesischen Sprache ist es mir möglich auf einen
            grossen Schatz an Wissen zurückzugreifen und kontinuierlich
            weiterzulernen.{" "}
          </p>
          <br />

          <h2 class="left">Ausbildung</h2>
          <ul>
            <li>2020 Dipl TCM Therapeut Fachrichtung Tuina</li>
            <li>2019 Dipl. TCM Therapeut Fachrichtung Akupunktur</li>
          </ul>
          <br />
          <h2 class="left">Weitere Tätigkeiten</h2>
          <ul>
            <li>
              Tanzlehrer an der{" "}
              <a href="http://bounceurban.ch/" target="_blank">
                BounceUrban
              </a>{" "}
              Tanschule, Bern
            </li>
            <li>
              Kursassistenz am{" "}
              <a href="https://sake.ch/" target="_blank">
                SAKE Bildungszentrum
              </a>
              , Bern
            </li>
          </ul>
          <br />
          <h2 class="left">Praktika</h2>
          <ul>
            <li>
              Praktika bei Léa Müller -{" "}
              <a href="Raum für Körperarbeit" target="_blank">Raum für Körperarbeit</a>, Bern
            </li>
            <li>Praktika bei Swiss Praktikum TCM, Bern</li>
          </ul>
        </div>
        <div class="col-30">
          <div class="portrait">
            <Img fluid={data.file.childImageSharp.fluid} alt="Portrait" />
          </div>
          <div class="center">
            <h3>Samuel Tonini</h3>
            <p>
              Dipl. TCM Akupunkteur
              <br />
              Dipl. TCM Tuina Therapeut
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage
