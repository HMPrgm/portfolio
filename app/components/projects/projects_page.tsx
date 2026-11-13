import Hero from "./Hero";
import ProjectArchive from "./ProjectArchive";
import type { Locale } from "../../i18n";

export default function ProjectsPage({ locale }: { locale: Locale }) {
  return (
    <main lang={locale}>
      <Hero locale={locale} />
      <ProjectArchive locale={locale} />
    </main>
  );
}
