import { Project } from "../home/Projects/project";
import Reveal from "../partials/effects/revealonscroll";
import ProjectPreview from "./ProjectPreview";
import ProjectSection from "./ProjectSection";
import type { Locale } from "../../i18n";
import { translations } from "../../i18n";

export interface ProjectCategory {
    name: string;
    projects: Project[];
}

export default function ProjectArchive({ locale }: { locale: Locale }) {
    const text = translations[locale];

    const projects: ProjectCategory[] = [
        {
            name: text.webDevelopment,
            projects: [
                {
                    title: "Fact App",
                    desc: text.factAppDescription,
                    link: "https://github.com/HMPrgm/RandomFactApp",
                },
                {
                    title: "HooBets",
                    desc: text.hoobetsDescription,
                    link: "https://github.com/HMPrgm/Hoobets",
                },
                {
                    title: "Groceries Online",
                    desc: text.groceriesDescription,
                    link: "https://github.com/HMPrgm/grocery-store-angular",
                },
                {
                    title: "Portfolio",
                    desc: text.portfolioDescription,
                    link: "https://github.com/HMPrgm/Portfolio",
                },
                {
                    title: "Textbook Lending Service",
                    desc: text.textbookDescription,
                    link: "https://github.com/HMPrgm/cs3120-project",
                },
                {
                    title: "Lingo",
                    desc: text.lingoDescription,
                    link: "https://github.com/HMPrgm/lingo",
                },
                {
                    title: "Basil",
                    desc: text.basilDescription,
                    link: "https://github.com/HMPrgm/basil",
                },
            ]
        },
        {
            name: text.artificialIntelligence,
            projects: [
                {
                    title: "AI Loan Officer",
                    desc: text.loanDescription,
                    link: "https://github.com/HMPrgm/ai-lender",
                }
            ]
        },
        {
            name: text.games,
            projects: [
                {
                    title: "Don't Pick a Side",
                    desc: text.dontPickDescription,
                    link: "https://hmprgm.itch.io/dont-pick-a-side"
                },
                {
                    title: "Cold War Diplomacy in Europe",
                    desc: text.coldWarDescription,
                    link: "https://hmprgm.itch.io/cold-war-diplomacy-in-europe"
                },
                {
                    title: "Tropical Getaway",
                    desc: text.tropicalDescription,
                    link: "https://hmprgm.itch.io/tropical-getaway"
                },
            ]
        },
        {
            name: text.other,
            projects: [
                {
                    title: "Note App",
                    desc: text.noteDescription,
                    link: "https://github.com/HMPrgm/NoteApp"
                },
                {
                    title: "OctoDB",
                    desc: text.octoDescription,
                    link: "https://github.com/HMPrgm/octo-db",
                },
            ]
        }
    ]

    return (
        <div>

            <p className="bg-Cwhite pt-6 text-center text-md sm:text-lg px-10">{text.archiveIntroduction}</p>

            {projects.map(p => <ProjectSection key={p.name} projectCategory={p} locale={locale}></ProjectSection>)}
        </div>
    )
}
