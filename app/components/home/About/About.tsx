import Reveal from "../../partials/effects/revealonscroll";
import AboutSection from "./About_section";
import TechStacks from "./techStacks";
import { TechStackInterface } from "./techStacksInter";
import type { Locale } from "../../../i18n";
import { translations } from "../../../i18n";

export default function About({ locale }: { locale: Locale }) {
  const text = translations[locale];

  const sections: any = {
    personal: {
      title: text.aboutPersonalTitle,
      text: text.aboutPersonalText,
      left: false,
      photo: 'Photo_Cropped.png'
    },
    webdev: {
      title: text.aboutLanguagesTitle,
      text: text.aboutLanguagesText,
      left: true,
      techs:
        [
          {
            name: 'Go',
            photo: './technology_photos/Go.png'
          },
          {
            name: 'Typescript',
            photo: './technology_photos/Typescript.png'
          },
          {
            name: 'Ruby',
            photo: './technology_photos/Ruby.png'
          },
          {
            name: 'Python',
            photo: './technology_photos/Python.png'
          },
          {
            name: 'Java',
            photo: './technology_photos/Java.png'
          },
          {
            name: 'C#',
            photo: './technology_photos/CSharp.png'
          },
          {
            name: 'C++',
            photo: './technology_photos/Cplusplus.png'
          },
          {
            name: 'C',
            photo: './technology_photos/C.png'
          },
          {
            name: 'Angular',
            photo: './technology_photos/Angular.png'
          },
          {
            name: 'React',
            photo: './technology_photos/React.png'
          },
          {
            name: 'Express.JS',
            photo: './technology_photos/Expressjs.png'
          },
        ]
    },
    other: {
      title: text.aboutOtherTitle,
      text: text.aboutOtherText,
      left: false,
      techs:
        [
          {
            name: 'Mongo DB',
            photo: './technology_photos/Mongodb.png'
          },
          {
            name: 'PostgreSQL',
            photo: './technology_photos/Postgres.png'
          },
          {
            name: 'Docker',
            photo: './technology_photos/Docker.png'
          },
          {
            name: 'AWS',
            photo: './technology_photos/AWS.png'
          },
          {
            name: 'Git',
            photo: './technology_photos/Git.png'
          },
          {
            name: '.NET',
            photo: './technology_photos/Dotnet.png'
          },
          {
            name: 'Unity',
            photo: './technology_photos/Unity.png'
          },
          {
            name: 'PyTorch',
            photo: './technology_photos/Pytorch.png'
          },
        ]
    },
    activities: {
      title: text.aboutActivitiesTitle,
      text: text.aboutActivitiesText,
      left: true,
      techs:
        [
          {
            name: 'Spanish',
            photo: './technology_photos/Spain.png'
          },
          {
            name: 'German',
            photo: './technology_photos/Germany.png'
          },
          {
            name: 'Dutch',
            photo: './technology_photos/netherlands.jpg'
          },
        ]
    },
  }

  return (
    <section id="about" className="bw-text flex flex-col justify-center text-center py-10">

      <Reveal>
        <h2 className="font-playfairDisplay text-5xl pb-10">{text.whoAmI}</h2>
      </Reveal>
      {/* Personal About Section */}
      <AboutSection
        key={sections.personal.title}
        title={sections.personal.title}
        text={sections.personal.text}
        left={sections.personal.left}>

        <img src={sections.personal.photo} alt={sections.personal.title} className="max-h-80 rounded-t-full bg-Cwhite " />
      </AboutSection>
      {/* Web Dev Section */}
      <AboutSection
        key={sections.title}
        title={sections.webdev.title}
        text={sections.webdev.text}
        left={sections.webdev.left}>

        <TechStacks techs={sections.webdev.techs}></TechStacks>
      </AboutSection>
      {/* Other Section */}
      <AboutSection
        key={sections.other.title}
        title={sections.other.title}
        text={sections.other.text}
        left={sections.other.left}>

        <TechStacks techs={sections.other.techs}></TechStacks>
      </AboutSection>
      {/* Design Section
      <AboutSection
        key={sections.design.title}
        title={sections.design.title}
        text={sections.design.text}
        left={sections.design.left}>

        <TechStacks techs={sections.design.techs}></TechStacks>
      </AboutSection> */}
      {/* Activities Section */}
      <AboutSection
        key={sections.activities.title}
        title={sections.activities.title}
        text={sections.activities.text}
        left={sections.activities.left}>

        <TechStacks techs={sections.activities.techs}></TechStacks>
      </AboutSection>
    </section>
  )
}
