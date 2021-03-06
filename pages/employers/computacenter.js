import React from 'react'
import Link from 'next/link'
import ComputacenterLogo from '../../assets/employers/computacenter.png'

export default function Computacenter() {
  return (
    <main className="iuc-employer">
      <header className="iuc-employer__header">
        <Link href="/employers">
          <a aria-label="Back to My Employers" className="iuc-employer__back-button">
            <span className="iuc-employer__arrow" />
          </a>
        </Link>
        <h1 className="iuc-employer__name">Computacenter AG & co. oHG</h1>
      </header>
      <img src={ComputacenterLogo} alt="Computacenter AG & Co. oHG" className="iuc-employer__logo" />
      <h2 className="iuc-employer__heading-two">Who is Computacenter?</h2>
      <blockquote className="iuc-employer__quote">
        <p className="iuc-employer__text">
          Computacenter is a leading independent provider of IT infrastructure services, enabling users and their
          business in a digital world. We advise organisations on IT strategy, implement the most appropriate
          technology, optimise its performance, and manage our customers’ infrastructures. In doing this we help CIOs
          and IT departments in enterprise and corporate organisations maximise productivity and the business value of
          IT for internal and external users.
        </p>
        <p className="iuc-employer__text">
          Computacenter provides user support, supply chain management, and secure provision of applications and data to
          support individual working styles and improve collaboration. To achieve this, we assist with consulting as
          well as the implementation and operation of networks and datacenter infrastructures on or off customers’
          premises and in the cloud.
        </p>
        <p className="iuc-employer__text">
          Computacenter combines global reach with local expertise. We operate Infrastructure Operations Centers and
          Group Service Desks across Europe, South Africa, Asia and the Americas from which our employees provide user
          support in 30 languages. Customers with global requirements are served through an extensive international
          partner network, which mirrors the requirements of our European-headquartered client base.
        </p>
        <cite className="iuc-employer__cite">
          <a target="_blank" className="iuc-employer__cite--link"
             href="https://www.computacenter.com/uk/about-us/company-profile">
            Computacenter Ltd.
          </a>
        </cite>
      </blockquote>
      <h2 className="iuc-employer__heading-two">Who are Computacenters’ clients?</h2>
      <ul className="iuc-employer__list">
        <li>IT-Niedersachsen</li>
        <li>Heathrow Airport</li>
        <li>Hays</li>
        <li>BMW Group</li>
        <li>Channel 4</li>
        <li>Camelot</li>
      </ul>
      <h2 className="iuc-employer__heading-two">What did I do at Computacenter?</h2>
      <p className="iuc-employer__text">
        In January 2015 I started to work at Computacenter&nbsp;AG&nbsp;&&nbsp;Co.&nbsp;oHG as a technology associate.
        At Computacenter I had my first contacts in the field of consulting. My first assignment was at IT.Niedersachsen
        to develop a new ordering system for internal hardware and software. This system was my first contact with a
        full SPA framework. Besides the ordering system, I developed a system for legally compliant storage and
        archiving of official documents.
      </p>
      <p className="iuc-employer__text">
        After the main requirements were implemented development slowed down. Therefore I was assigned a new project.
        This project was about a system for managing HP Service Manager incidents. Within a short turnaround time a
        colleague and I implemented this system and a new challenge was needed.
      </p>
      <p className="iuc-employer__text">
        My last project at Computacenter was an internal system for managing hardware rollouts for customers. This
        system was developed based on ASP.net&nbsp;MVC and a modern JavaScript frontend. I spent most of my time in the
        frontend project and discovered my love for design.
      </p>
    </main>
  )
}
