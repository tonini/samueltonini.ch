import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const KostenPage = () => (
  <Layout>
    <SEO title="Kosten" />

    <h1>Kosten</h1>

    <div class="site-half">
      <div class="col">
        <h2 class="left">Tarif</h2>

        <p>
          <b>Stundenansatz:</b> CHF 144.-
          <br />
          <b>Erstkonsultation:</b> 60 bis 90 Minuten
          <br />
          <b>Folgetermine:</b> 30 bis 60 Minuten
        </p>
        <br />
        <h2 class="left">Mitgliedschaften und Bewilligungen</h2>
        <p>Ich verfüge über folgende Mitgliedschaften/Bewilligungen:</p>
        <ul>
          <li>
            <a
              href="https://www.emr.ch/partner"
              target="_blank"
              rel="noreferrer"
            >
              EMR
            </a>{" "}
            (Erfahrungsmedizinisches Register)
          </li>
          <li>Berufsausübungsbewilligung des Kantons Bern</li>
        </ul>
        <br />
        <h2 class="left">Wichtiger Hinweis</h2>
        <p>
          Falls Sie eine Terminvereinbarung nicht einhalten können, melden Sie
          sich bitte mindestens 24h vorher ab, ansonsten wird der Termin
          vollumfänglich verrechnet.
        </p>
      </div>

      <div class="col">
        <h2 class="left">Terminvereinbarung</h2>
        <p>
          <b>Terminanfrage:</b> Gerne bin ich für Sie per{" "}
          <a href="mailto:info@samueltonini.ch">E-Mail</a> erreichbar oder telefonisch unter 079 208 44 57.
        </p>

        <h2 class="left">Krankenkasse</h2>
        <p>
          Ihre Leistungen werden in der Regel bei Vorhandensein einer
          Zusatz­versicherung für Alternativ-/Komplementär­medizin von der
          Kranken­kasse übernommen. Je nach persönlichem Versicherungsschutz
          werden 70 bis 90 Prozent der Leistungen von der Versicherung bezahlt.
        </p>
        <p>
          Ich empfehle Ihnen, die nötigen Abklärungen vor Behandlungs­beginn zu
          treffen.
        </p>

        <p>
          Falls Sie über keine Zusatzversicherung verfügen und trotzdem eine
          Behandlung wünschen, dann treten Sie bitte mit mir in Kontakt, damit
          wir zusammen eine Lösung für Sie finden.
        </p>
      </div>
    </div>
  </Layout>
)

export default KostenPage
