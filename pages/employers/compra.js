import React from 'react'
import CompraClaim from '../../assets/employers/COMPRA_Claim.svg'
import Link from 'next/link'

export default function Compra() {
  return (
    <main className="iuc-employer">
      <header className="iuc-employer__header">
        <Link href="/employers">
          <a aria-label="Back to My Employers" className="iuc-employer__back-button">
            <span className="iuc-employer__arrow" />
          </a>
        </Link>
        <h1 className="iuc-employer__name">COMPRA</h1>
      </header>
      <CompraClaim className="iuc-employer__logo" />
      <h2 className="iuc-employer__heading-two">Who is COMPRA?</h2>
      <blockquote className="iuc-employer__quote">
        <p className="iuc-employer__text">
          Seit 1989 gelingt es der COMPRA kontinuierlich einen großen Kundenkreis mittelständischer Unternehmen mit
          unterschiedlichsten Unternehmensschwerpunkten auf- und auszubauen.
        </p>
        <p className="iuc-employer__text">
          Über 50 Mitarbeiter betreuen aktuell mehr als 200 mittelständische Unternehmen und über 450 Handwerksbetriebe
          im Bereich betriebswirtschaftlicher Softwarelösungen.
        </p>
        <cite className="iuc-employer__cite">
          <a target="_blank" className="iuc-employer__cite--link" href="https://www.compra.de/ueber-uns/">
            COMPRA GmbH
          </a>
        </cite>
      </blockquote>
      <h2 className="iuc-employer__heading-two">Who are COMPRAs’ clients?</h2>
      <ul className="iuc-employer__list">
        <li>Biozym</li>
        <li>mateco</li>
        <li>ROSSMANN</li>
        <li>ASAL Baubeschlag</li>
        <li>LCN Cosmetics</li>
        <li>ZAH Hildesheim</li>
        <li>Spielplatzgeräte Maier</li>
      </ul>
      <h2 className="iuc-employer__heading-two">What did I do at COMPRA?</h2>
      <p className="iuc-employer__text">
        In April 2016 I started as a software developer at COMPRA&nbsp;GmbH in Hildesheim. At the beginning of my work I
        was assigned as a developer for the webshop of Dirk&nbsp;Rossmann&nbsp;GmbH. At that time the webshop was
        programmed on the basis of ASP.net WebForms, which was new territory for me at that time. Although the
        technology was new to me, I quickly got used to it and did a good job. While I was still working on the Rossmann
        shop, the shop was renewed and we developed the new system together with the company Aperto.
      </p>
      <p className="iuc-employer__text">
        At the beginning of 2017, I was transferred to a new team to support the development of webshops based on
        Shopware 5. In this team I was able to build up a high level of knowledge very quickly. In addition to my work
        as a shopware developer, I have made many changes of an organisational and technical nature. Together with a
        colleague, I have built up a system to improve the internal processes. This system consisted of various
        technical facilities to increase the code quality. Beside the code quality an automatic deployment was another
        important part of the new technical architecture we built. With this deployment it was possible to streamline
        the processes in the team significantly and to eliminate many of the problems caused by manual deployment. This
        led to significantly fewer day-to-day errors, which reduced our support effort.
      </p>
      <p className="iuc-employer__text">
        Besides the process improvement, we planned, organized and implemented a migration from Microsoft TFVC to Git.
        This conversion took about two months and included an application designed as a migration solution. With the
        help of this application we were able to keep the entire history of the source code. After the conversion to
        Git, a new branching model was implemented. After a thorough analysis, we chose Git-Flow because we saw the best
        way to implement our requirements with Git-Flow.
      </p>
    </main>
  )
}
