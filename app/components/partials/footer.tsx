'use client';
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import type { Locale } from "../../i18n";
import { translations } from "../../i18n";

export default function Footer() {
  const pathname = usePathname();
  const locale: Locale = pathname === "/nl" || pathname.startsWith("/nl/")
    ? "nl"
    : "en";
  const text = translations[locale];

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <footer className="bw-text py-10">
      <div className="grid sm:grid-cols-2 text-center gap-4">
        <div className="container mx-auto items-center md:w-96 px-4 lg:px-0">
          {text.designedWith} <b>Figma</b>, {text.builtWith} <b>Next.js</b>
          {locale === "nl" ? " en " : " and "}
          <b>Tailwind CSS</b>, {locale === "nl" ? "" : "and "}
          {text.andDeployed} <b>Vercel</b>.
        </div>
        <div className="flex flex-col">
          <div className="flex justify-center gap-4">
            <div><a href="https://github.com/HMPrgm" target="_blank" className="hover:text-Cmain transition-all duration-300">Github</a></div>
            <div><a href="https://www.linkedin.com/in/henry-morris-b87361274/" target="_blank" className="hover:text-Cmain transition-all duration-300">Linkedin</a></div>
            <div><a href="mailto:henrymprof@gmail.com" target="_blank" className="hover:text-Cmain transition-all duration-300">Email</a></div>
          </div>
          <div className="text-xs">Henry Morris ©2026</div>
        </div>
      </div>
    </footer>
  )
}
