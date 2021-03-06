import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "samuel.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 250, maxHeight: 250) {
            ...GatsbyImageSharpFluid_noBase64
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
            Der Tanz öffnete mir die Türen zu einem tiefen Verstehen des
            eigenen Körpers. Diese Erfahrung bereichert und unterstützt mein
            Verständnis der Behandlungsmethoden der Chinesischen Medizin, das
            heisst Tuina sowie Akupunktur.
          </p>
          <p>
            Mit gleichem Interesse wie ich mich vor langer Zeit dem Tanz
            verschrieben habe, widme ich mich nun seit mehreren Jahren intensiv
            dem Studium der Chinesischen Medizin. Auch durch die
            Auseinandersetzung mit der chinesischen Sprache ist es mir möglich
            auf einen grossen Schatz an Wissen zurückzugreifen und
            kontinuierlich weiterzulernen.{" "}
          </p>
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
      <div class="site-half">
        <div class="col">
          <h2 class="left">Ausbildung</h2>
          <ul>
            <li>2020 Dipl TCM Therapeut Fachrichtung Tuina</li>
            <li>2019 Dipl. TCM Therapeut Fachrichtung Akupunktur</li>
          </ul>
          <br />
          <h2 class="left">Praktika</h2>
          <ul>
            <li>
              Praktika bei Léa Müller -{" "}
              <a href="http://www.xn--raumfrkrperarbeit-5zb5i.ch/" target="_blank" rel="noreferrer">
                Raum für Körperarbeit
              </a>
              , Bern
            </li>
            <li>Praktika bei Swiss Praktikum TCM, Bern</li>
          </ul>
        </div>
        <div class="col">
          <h2 class="left">Weitere Tätigkeiten</h2>
          <ul>
            <li>
              Tanzlehrer{" "}
              <a href="http://bounceurban.ch/" target="_blank" rel="noreferrer">
                BounceUrban
              </a>{" "}
              , Bern
            </li>
            <li>
              Kursassistenz am{" "}
              <a href="https://sake.ch/" target="_blank" rel="noreferrer">
                SAKE Bildungszentrum
              </a>
              , Bern
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage
