import Reveal from "../../partials/effects/revealonscroll";
import AboutSection from "./About_section";
import TechStacks from "./techStacks";
import { TechStackInterface } from "./techStacksInter";
export default function About() {

  const sections: any = {
    personal: {
      title: "I'm a CS and Math Student at UVA",
      text: "I'm a third-year student at the University of Virginia, studying Computer Science and Mathematics. I have a passion for software engineering and am always looking to learn new technologies. I love working on projects that challenge me and allow me to grow as a developer. My main interest in math is Graph theory. Outside of CS, I enjoy reading, lifting, cooking (especially Italian food), and learning languages (more below).",
      left: false,
      photo: 'Photo_Cropped.png'
    },
    webdev: {
      title: "Languages & Technologies I've Used",
      text: "I started programming in 2018 with C# and Unity, and spent around 3 years developing games. In that time, I took courses in Python and Jave. I started web development in 2021 with Basic HTML, CSS, Javascript, then moved to Express and Node.js, and have since learned React, Next.js, Angular and Tailwind. I have since gained experience with many different languages, frameworks, and technologies. Currently I mainly use Typescript, Go, Ruby, and C++. I love learning new technologies and am always looking for new challenges.",
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
      title: "Databases, Cloud, and Other Technologies",
      text: "I have experience with many different databases, including MongoDB, PostgreSQL, and SQLite. I have also worked with cloud technologies such as AWS and Google Cloud. I have experience with Docker and Kubernetes, and have used containers to deploy applications in the cloud. I have also worked with Git and GitHub for version control and collaboration.",
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
    design: {
      title: "I'm an Audio and Video Editor",
      text: "I'm an editor for two podcasts: <a href='https://open.spotify.com/show/0OtkSXW04TEbGX3lwUEQcH?si=d884835e44414dd6' target='_blank'>The Hidden Curriculum</a> and <a href='https://open.spotify.com/show/4ZiJcyjqtUC9G09zIqdcVY?si=6346d934a38d4073 target='_blank'>Coup de'Pod</a>. I've been using professional video editing software since 2020. I'm at an intermediate level with Premiere Pro and Davinci Resolve and am a beginner in After Effects. I have skills with design software, being at an intermediate level with Photoshop and Illustrator and a beginner with Figma.",
      left: true,
      techs:
        [
          {
            name: 'Davinci Resolve',
            photo: './technology_photos/Davinciresolve.png'
          },
          {
            name: 'Premire Pro',
            photo: './technology_photos/Premirepro.png'
          },
          {
            name: 'After Effects',
            photo: './technology_photos/Aftereffects.png'
          },
          {
            name: 'Photoshop',
            photo: './technology_photos/Photoshop.png'
          },
          {
            name: 'Illustrator',
            photo: './technology_photos/Illustrator.png'
          },
          {
            name: 'Figma',
            photo: './technology_photos/Figma.png'
          },
        ]
    },
    activities: {
      title: "I Love learning Languages",
      text: "My goal is to learn Spanish, German, and Italian by the time I'm 25. Not necessarily fluently, but enough to have a casual conversation with a native speaker.",
      left: false,
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
            name: 'Italian',
            photo: './technology_photos/Italian.png'
          },
        ]
    },
  }

  return (
    <section id="about" className="bw-text flex flex-col justify-center text-center py-10">

      <Reveal>
        <h2 className="font-playfairDisplay text-5xl pb-10">Who Am I?</h2>
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
      {/* Design Section */}
      <AboutSection
        key={sections.design.title}
        title={sections.design.title}
        text={sections.design.text}
        left={sections.design.left}>

        <TechStacks techs={sections.design.techs}></TechStacks>
      </AboutSection>
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
