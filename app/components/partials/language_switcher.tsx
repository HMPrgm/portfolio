'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "../../i18n";

const languages: { locale: Locale; flag: string; label: string; name: string }[] = [
  { locale: "en", flag: "🇺🇸", label: "EN", name: "English" },
  { locale: "nl", flag: "🇳🇱", label: "NL", name: "Nederlands" },
];

export default function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const englishPath = pathname === "/nl"
    ? "/"
    : pathname.startsWith("/nl/")
      ? pathname.slice(3)
      : pathname;
  const dutchPath = pathname === "/" ? "/nl" : `/nl${pathname}`;

  return (
    <details className="relative text-sm">
      <summary
        aria-label={`Current language: ${locale === "en" ? "English" : "Nederlands"}`}
        className="flex cursor-pointer list-none items-center gap-2 rounded-full px-3 py-1 transition-colors hover:text-Cmain [&::-webkit-details-marker]:hidden"
      >
        <span>{locale.toUpperCase()}</span>
        <span aria-hidden="true" className="text-xs">▾</span>
      </summary>
      <div className="absolute right-6 top-full z-30 mt-2 min-w-max rounded-lg bg-white py-1 text-left shadow-lg dark:bg-[#131920]">
        {languages.map((language) => (
          <Link
            key={language.locale}
            href={language.locale === "nl" ? dutchPath : englishPath}
            lang={language.locale}
            aria-current={language.locale === locale ? "true" : undefined}
            className="flex items-center gap-2 px-4 py-2 transition-colors hover:bg-Cmain hover:text-white"
          >
            <span>{language.label}</span>
          </Link>
        ))}
      </div>
    </details>
  );
}
