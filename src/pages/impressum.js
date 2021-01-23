import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const ImpressumPage = () => (
  <Layout>
    <SEO title="Impressum" />
    <div class="col">
      <h1>Impressum</h1>

      <h2 class="left">Verantwortung Website</h2>
      <p>
        Samuel Tonini <br />
        Hochfeldstrasse 117
        <br />
        3012 Bern
        <br />
        079 208 44 57
        <br />
      </p>
    </div>
    <div class="col">
      <h2 class="left">Urheberrechte</h2>
      <p>
        Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder
        anderen Dateien auf der Website gehören ausschliesslich der oben
        genannten Firma/Person oder den speziell genannten Rechtsinhabern. Für
        die Reproduktion jeglicher Elemente ist die schriftliche Zustimmung der
        Urheberrechtsträger im Voraus einzuholen.
      </p>
    </div>
    <div class="col">
      <h2 class="left">Haftungsausschluss</h2>
      <p>
        Der Autor übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen
        Richtigkeit, Genauigkeit, Aktualität, Zuverlässigkeit und
        Vollständigkeit der Informationen. Haftungsansprüche gegen den Autor
        wegen Schäden materieller oder immaterieller Art, welche aus dem Zugriff
        oder der Nutzung bzw. Nichtnutzung der veröffentlichten Informationen,
        durch Missbrauch der Verbindung oder durch technische Störungen
        entstanden sind, werden ausgeschlossen. Alle Angebote sind
        unverbindlich. Der Autor behält es sich ausdrücklich vor, Teile der
        Seiten oder das gesamte Angebot ohne gesonderte Ankündigung zu
        verändern, zu ergänzen, zu löschen oder die Veröffentlichung zeitweise
        oder endgültig einzustellen.
      </p>
    </div>{" "}
    <div class="col">
      <h2 class="left">Haftung für Links</h2>
      <p>
        Verweise und Links auf Webseiten Dritter liegen ausserhalb unseres
        Verantwortungsbereichs Es wird jegliche Verantwortung für solche
        Webseiten abgelehnt. Der Zugriff und die Nutzung solcher Webseiten
        erfolgen auf eigene Gefahr des Nutzers oder der Nutzerin.
      </p>
    </div>
  </Layout>
)

export default ImpressumPage
