import React from 'react'
import ProjectPreview from './project_preview'
import Reveal from '../../partials/effects/revealonscroll'
import Link from 'next/link';
import {Project} from './project'
import type { Locale } from "../../../i18n";
import { translations } from "../../../i18n";



export default function Projects({ locale }: { locale: Locale }) {
  const text = translations[locale];

  const linkToProjectPage: string = locale === "nl" ? "/nl/projects" : "/projects";
  const finishedProjects: Project[] = [
    {
      title: "Textbook Lending Service",
      desc: text.textbookDescription,
      link: "https://github.com/HMPrgm/cs3120-project",
    },
  ]

  const currentProjects: Project[] = [
    {
      title: "Sapling Dutch",
      desc: locale === "nl"
        ? "Een app om Nederlands te leren met gespreide herhaling voor woordenschat en grammatica."
        : "A Dutch language learning app that uses spaced repetition to help users learn vocabulary and grammar.",
      link: "https://github.com/HMPrgm/lingo",
    },
    // {
    //   title: "Basil",
    //   desc: "A personal finance tracker to take control of your financial data. Built for those who miss Mint.com.",
    //   link: "https://github.com/HMPrgm/basil",
    // },
    // {
    //   title: "OctoDB",
    //   desc: "A simple, lightweight graph database for your project. Written in C++.",
    //   link: "",
    // },
  ]
  return (
    <section id="projects" className='bw-extreme-text text-center py-10 '>
      <Reveal>
        <h2 className='project-title text-3xl sm:text-5xl'>{text.recentProjects}</h2>
      </Reveal>
      {finishedProjects.map(proj =>
        <Reveal>
          <ProjectPreview key={proj.title} project={proj} locale={locale}></ProjectPreview>
        </Reveal>
      )}
      <Reveal>
        <h2 className='project-title text-3xl sm:text-5xl'>{text.inProgress}</h2>
      </Reveal>
      {currentProjects.map(proj =>
        <Reveal>
          <ProjectPreview key={proj.title} project={proj} locale={locale}></ProjectPreview>
        </Reveal>
      )}
      <Reveal>
        <Link href={linkToProjectPage} className='text-lg hover:text-Cmain transition-all duration-500  hover:text-[1.2rem]'>
          <p>{text.allProjects}</p>
        </Link>
      </Reveal>
    </section>
  )
}
