export default function footer() {
  return (
    <footer className="bw-text py-10">
      <div className="grid grid-cols-2 text-center">
        <div className="container mx-auto items-center md:w-96">
          Designed in <b>Figma</b> and developed in <b>VS Code.</b> Built with <b>Next.js</b> and <b>Tailwind CSS</b>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-center gap-4">
            <div><a href="https://github.com/HMPrgm" target="_blank">Github</a></div>
            <div><a href="https://www.linkedin.com/in/henry-morris-b87361274/" target="_blank">Linkedin</a></div>
            <div><a href="mailto:henrymprof@gmail.com" target="_blank">Email</a></div>
          </div>
          <div className="text-xs">Henry Morris ©2024</div>
        </div>
      </div>
    </footer>
  )
}
