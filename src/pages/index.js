import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div class="site-half">
      <div class="col">
        <h1>Willkommen</h1>
        <p>
          Den Menschen in seinem individuellen Lebenskontext ganzheitlich zu
          betrachten, zu verstehen und zu behandeln dafür bietet die Chinesische
          Medizin ein breites Wissen und geeignete Behandlungsmethoden.{" "}
        </p>
        <p>
          Ich begleite und unterstütze Sie gerne auf ihrem persönliche Weg zu
          einer besseren Gesundheit und Lebensqualität.
        </p>
        {/* <p class="center">
          <span class="chinese-text">"百病生于气也" </span>
          <br />
          <span class="from">(Huang Di Nei Jing - Su Wen, Kapitel 39)</span>
        </p> */}
      </div>

      {/* <h2>Betreffend der Corona-Pandemie</h2>
    <p>Auch in Zeiten der Covid 19 Pandemie, sind Sie bei mir gut aufgehoben. Ich halte mich selbstverständlich an die allgemeinen Sicherheits- und Hygienestandards.
    Dabei stütze ich mich auf die Vorgaben des BAG und das <a href="https://tcm-fachverband.ch/wp-content/uploads/2020/10/Schutzkonzept-Corona-TCM-FVS-19.10.20-1.pdf">Schutzkonzept des TCM Fachverbands.</a>

    <p>Falls Sie Symptome wie Husten, Fieber oder Halsschmerzen haben, bleiben Sie bitte zu Hause und nehmen telefonisch Kontakt mit mir auf.</p>

    </p> */}
    </div>
  </Layout>
)

export default IndexPage
