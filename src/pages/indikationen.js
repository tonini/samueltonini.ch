import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndikationenPage = () => (
  <Layout>
    <SEO title="Impressum" />
    <div class="site-half">
      <div class="col">
        <h1>Anwendungsgebiete</h1>
        <p>
          Im folgenden wird eine Auswahl an Krankheiten und Störungen aufgelistet, die sich
          erfahrungsgemäss häufig effizient mit den Methoden der Chinesischen
          Medizin therapieren lassen.
        </p>
        <p>
          Die Angaben stützen sich auf die Empfehlungen der
          Welt-Gesundheits-Organisation WHO. <br />
        </p>
      </div>
    </div>
    <div class="site-half">
      <div class="col">
        <h3 class="left">Neurologische Krankheiten</h3>
        <p>
          <ul class="left">
            <li>Schwindel</li>
            <li>Tinnitus (Ohrgeräusche, Ohrensausen)</li>
            <li>
              Ischialgien (Schmerzen der Lendenwirbelsäule z.B. Hexenschuss){" "}
            </li>
            <li>Trigeminusneuralgie (Schmerzattacken im Gesicht) </li>
            <li>Behandlungen nach Schlaganfall </li>
            <li>Kopfschmerzen </li>
            <li>Migräne</li>
          </ul>
        </p>
      </div>
      <div class="col">
        <h3 class="left">Orthopädische Krankheiten</h3>
        <ul class="left">
          <li>Chronische Rückenschmerzen </li>
          <li>
            Allgemeine Muskel-, Gelenk-, und Bewegungsschmerzen oder
            Bewegungseinschränkungen
          </li>
          <li>Bandscheibenvorfall </li>
          <li>Arthritis und Arthrose </li>
          <li>Rheumatische Erkrankungen </li>
          <li>Tennisellenbogen (Epikondylistis) </li>
          <li>Schulter-Arm-Syndrom </li>
          <li>Nackenschmerzen/Nackensteife </li>
          <li>Muskelverspannungen</li>
        </ul>
      </div>

      <div class="col">
        <h3 class="left">Innere Krankheiten</h3>
        <ul class="left">
          <li>Anämie (Blutarmut) </li>
          <li>Bronchitis</li>
          <li>
            Metabolische Syndrome (Übergewicht, erhöhte Blutfettwerte,
            Bluthochdruck (Hypertonie)){" "}
          </li>
          <li>Fettstoffwechselstörungen</li>
          <li>Gicht </li>
          <li>Hämorrhoiden </li>
        </ul>
      </div>
    </div>

    <div class="site-half">
      <div class="col">
        <h3 class="left">Gynäkologie / Urologie</h3>
        <ul class="left">
          <li>Menstruationsstörungen </li>
          <li>Menopausen Probleme </li>
          <li>Blasenentzündungen</li>
          <li>Sexual- und Fruchtbarkeitsstörungen </li>
          <li>Schwangerschaft und Geburt </li>
        </ul>
      </div>
      <div class="col">
        <h3 class="left">Allergien / Hauterkrankungen</h3>
        <ul class="left">
          <li>Pollenallergie (Heuschupfen) </li>
          <li>Asthma </li>
          <li>Akne</li>
          <li>Ekzeme (z.B. Neurodermitis) </li>
          <li>Psoriasis (Schuppenflechte) </li>
        </ul>
      </div>
      <div class="col">
        <h3 class="left">Sonstige Krankheiten</h3>
        <ul class="left">
          <li>Depressive Zustände </li>
          <li>Psychische Störungen </li>
          <li>Burn- out Syndrome </li>
          <li>Schlafstörungen </li>
          <li>Erschöpfungszustände </li>
          <li>Herzprobleme </li>
          <li>Linderung von Nebenwirkungen einer Chemotherapie</li>
        </ul>
      </div>
    </div>

    <div class="site-half">
      <div class="col">
        <h3 class="left">Magen- und Darmerkrankungen</h3>
        <ul class="left">
          <li>Hyperazidität (Übersäuerung) des Magens </li>
          <li>Obstipation (Verstopfung) </li>
          <li>Diarrhöe (Durchfall) </li>
          <li>
            Akute und chronische Gastritis (Entzündung der Magenschleimhaut){" "}
          </li>
          <li>Magengeschwüre (Ulcus) </li>
          <li>Chronische Entzündung der Darmschleimhaut (Colitis ulcerosa) </li>
          <li>
            Morbus Crohn (chronische entzündliche Erkrankung von Magen und Darm){" "}
          </li>
        </ul>
      </div>
      <div class="col">
        <h3 class="left">Infekte mit chronischem Hintergrund</h3>
        <ul class="left">
          <li>
            Akute und chronische Sinusitis (Entzündung der Nasennebenhölen){" "}
          </li>
          <li>
            Akute und chronische Rhinitis (Entzündung der Nasenschleimhaut){" "}
          </li>
          <li>
            Akute und chronische Konjunktivitis (Entzündung der Bindehaut)
          </li>
          <li>Allgemeine Erkältungskrankheiten </li>
          <li>
            Pharyngitis (Entzündung der Rachenschleimhaut, akuter Katarrh){" "}
          </li>
          <li>Allgemeine Abwehrschwäche </li>
        </ul>
      </div>
      <div class="col"></div>
    </div>
  </Layout>
)

export default IndikationenPage
