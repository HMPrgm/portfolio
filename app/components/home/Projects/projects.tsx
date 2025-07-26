import React from 'react'
import ProjectPreview from './project_preview'
import Reveal from '../../partials/effects/revealonscroll'
import Link from 'next/link';
import {Project} from './project'



export default function Projects() {

  const linkToProjectPage: string = '/projects'
  const finishedProjects: Project[] = [
    {
      title: "Textbook Lending Service",
      desc: "A platform for lending and borrowing textbooks",
      link: "https://github.com/HMPrgm/cs3120-project",
    },
  ]

  const currentProjects: Project[] = [
    {
      title: "Lingo",
      desc: "A minimalist alternative to language learning platforms like LingQ and Duolingo. Learn languages through reading content you love.",
      link: "https://github.com/HMPrgm/lingo",
    },
    {
      title: "Basil",
      desc: "A personal finance tracker to take control of your financial data. Built for those who miss Mint.com.",
      link: "https://github.com/HMPrgm/basil",
    },
    {
      title: "OctoDB",
      desc: "A simple, lightweight graph database for your project. Written in C++.",
      link: "",
    },
  ]
  return (
    <section id="projects" className='bw-extreme-text text-center py-10 '>
      <Reveal>
        <h2 className='project-title text-3xl sm:text-5xl'>Recent Projects</h2>
      </Reveal>
      {finishedProjects.map(proj =>
        <Reveal>
          <ProjectPreview key={proj.title} project={proj}></ProjectPreview>
        </Reveal>
      )}
      <Reveal>
        <h2 className='project-title text-3xl sm:text-5xl'>In Progress</h2>
      </Reveal>
      {currentProjects.map(proj =>
        <Reveal>
          <ProjectPreview key={proj.title} project={proj}></ProjectPreview>
        </Reveal>
      )}
      <Reveal>
        <Link href={linkToProjectPage} className='text-lg hover:text-Cmain transition-all duration-500  hover:text-[1.2rem]'>
          <p>All Projects </p>
        </Link>
      </Reveal>
    </section>
  )
}
