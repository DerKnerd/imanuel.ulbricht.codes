import React from 'react'
import LineasClaim from '../../assets/employers/lineas.png'
import Link from 'next/link'

export default function Lineas() {
  return (
    <main className="iuc-employer">
      <header className="iuc-employer__header">
        <Link href="/employers">
          <a aria-label="Back to My Employers" className="iuc-employer__back-button">
            <span className="iuc-employer__arrow" />
          </a>
        </Link>
        <h1 className="iuc-employer__name">LINEAS Informationstechnik GmbH</h1>
      </header>
      <img src={LineasClaim} className="iuc-employer__logo" alt="Logo of LINEAS Informationstechnik GmbH" />
      <h2 className="iuc-employer__heading-two">Who is LINEAS?</h2>
      <blockquote className="iuc-employer__quote">
        <p className="iuc-employer__text">
          Bereits seit 1989 gehört LINEAS zu den führenden Software- und Beratungshäusern in Niedersachsen. Mit
          innovativen Ansätzen, viel Kreativität, höchster Professionalität und großer Begeisterung tragen wir zum
          Erfolg
          unserer Kunden bei und entwickeln für Sie maßgeschneiderte, zukunftssichere, integrierte Lösungen.
        </p>
        <p className="iuc-employer__text">
          Mit unserem marktorientierten Themenmanagement erweitern wir unser Leistungsportfolio und die Kompetenz
          unserer
          Mitarbeiter um neue Technologien und Methoden. Auf dieser Basis entwickeln sich unsere Mitarbeiter
          kontinuierlich weiter.
        </p>
        <p className="iuc-employer__text">
          Wir bieten Service in vollem Umfang: Unser Team aus hochspezialisierten Profis begleitet jeden Kunden von der
          Beratung über die Konzeption und Entwicklung bis hin zum Rollout und übernimmt auch den anschließenden
          Support.
          Dabei folgen sie stets unseren Grundwerten:
        </p>
        <ul>
          <li>Zuverlässigkeit und Verbindlichkeit</li>
          <li>Respekt und Verantwortung</li>
          <li>Kooperation und Vertrauen</li>
          <li>Transparenz</li>
          <li>Mut und Nachhaltigkeit</li>
          <li>Selbstständigkeit und Individualismus</li>
        </ul>
        <cite className="iuc-employer__cite">
          <a target="_blank" className="iuc-employer__cite--link" href="https://www.lineas.de/unternehmen/">
            LINEAS Informationstechnik GmbH
          </a>
        </cite>
      </blockquote>
      <h2 className="iuc-employer__heading-two">Who are LINEAS’ clients?</h2>
      <ul className="iuc-employer__list">
        <li>None published</li>
      </ul>
      <h2 className="iuc-employer__heading-two">What did I do at LINEAS?</h2>
      <p className="iuc-employer__text">
        In June 2018 I started my job as a system analyst at LINEAS&nbsp;Informationstechnik&nbsp;GmbH. At first I was
        employed at LINEAS for an internal project. This project helped me to improve my knowledge of ReactJS and
        node.js and I was able to really live my design skills for the first time. After many consultations with
        colleagues, a very mature design was created, which proved to be useful in many areas. This design became the
        standard design for new applications that start as an internal project.
      </p>
      <p className="iuc-employer__text">
        Unfortunately I suffered a long illness in November 2018, which put me out of action until the beginning of
        September 2019. When I resumed my job at LINEAS in September 2019, I was reassigned to my previous project.
      </p>
      <p className="iuc-employer__text">
        At the beginning of 2020 I was assigned a new project by LINEAS. Currently this project is subject to
        confidentiality and I can only say something about the technologies used. The application is supposed to be a
        modern web application, based on ASP.net core and KendoUI. The database for the application will be the
        Microsoft SQL Server.
      </p>
      <p className="iuc-employer__text">
        LINEAS is my current employer.
      </p>
    </main>
  )
}
