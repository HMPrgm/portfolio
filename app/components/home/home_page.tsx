import About from "./About/About";
import ContactNoForm from "./contact_no_form";
import Hero from "./hero";
import Projects from "./Projects/projects";
import Navbar from "../partials/navbar";
import type { Locale } from "../../i18n";

export default function HomePage({ locale }: { locale: Locale }) {
  return (
    <main lang={locale} className="overflow-x-hidden">
      <Navbar locale={locale} />
      <Hero locale={locale} />
      <Projects locale={locale} />
      <About locale={locale} />
      <ContactNoForm locale={locale} />
    </main>
  );
}
