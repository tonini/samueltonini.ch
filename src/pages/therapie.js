import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="Behandlungsablauf" />
    <div class="col">
      <h1>Informationen zum Behandlungsablauf</h1>
      <p>
        Ihr Erstbesuch dauert ca. 90 Minuten und beinhaltet ein umfassendes
        Gespräch. Anhand der von Ihnen beschriebenen Symptomatik, erstelle
        ich eine TCM-Diagnose. Diese Erstdiagnose ergänze ich mit einer
        Untersuchung ihrer Zunge und ihres Pulses, sowie Abtasten
        unterschiedlicher Meridiane ihres Körpers. Infolge besprechen wir
        gemeinsam das weitere Therapievorgehen, welches Tuina/Anmo (manuelle Therapie), Akupunktur, Moxa,
        Guasha und Schröpfen beinhalten kann.
      </p>
      <p>Alle Folgetermine dauern jeweils zwischen 30 und 60 Minuten.</p>
    </div>
    <div class="col">
      <h2 class="left">Terminvereinbarung</h2>
      <p>
        <b>Terminanfrage:</b> Gerne bin ich für Sie per{" "}
        <a href="mailto:info@samueltonini.ch">E-Mail</a> erreichbar oder
        telefonisch unter 079 208 44 57.
      </p>
    </div>
  </Layout>
)

export default AboutPage
