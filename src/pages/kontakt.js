import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const KontaktPage = () => (
  <Layout>
    <SEO title="Kontakt" />
    <h1>Kontakt</h1>
    <div class="site-half">
      <div class="col">
        <h2 class="left">Adresse</h2>
        <p>
          Samuel Tonini
          <br />
          Praxis für Chinesische Medizin
          <br />
          <br />
          Zentrum für Lebensenergie
          <br />
          Hochfeldstrasse 117
          <br />
          3012 Bern
          <br />
          <br />
          <b>Telefon:</b> 079 208 44 57
          <br />
          <b>E-Mail:</b>{" "}
          <a href="mailto:info@samueltonini.ch">info@samueltonini.ch</a>
        </p>
      </div>
      <div class="col">
        <h2 class="left">Anreise</h2>
        <p>
          Sie erreichen die Praxis mit dem Bus Nummer 11 ab Bern. Die Station
          "Engeried" befindet sich gleich neben der Praxis.
        </p>
      </div>
    </div>
    <div class="site-half">
      <div class="col">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2723.124629243025!2d7.432922615676176!3d46.95924127914701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478e3990c6aeee1f%3A0xd2ab8f4f7f07db71!2sHochfeldstrasse%20117%2C%203012%20Bern!5e0!3m2!1sde!2sch!4v1611432719823!5m2!1sde!2sch"
          width="920"
          height="250"
          frameborder="0"
          style={{ border: 0 }}
          allowfullscreen=""
          aria-hidden="false"
          title="Samuel Tonini | Praxis für Chinesische Medizin Akupunktur & Tuina / Anmo"
        ></iframe>
      </div>
    </div>
  </Layout>
)

export default KontaktPage
