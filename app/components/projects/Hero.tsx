'use client'
import Link from 'next/link';
import Dots from '../partials/dots/dots';
import type { Locale } from "../../i18n";
import { translations } from "../../i18n";
import LanguageSwitcher from "../partials/language_switcher";

export default function Hero({ locale }: { locale: Locale }) {
  const text = translations[locale];

  const nums: number[] = []
  for (let i: number = 0; i < 200; i++) {
    nums.push(i);
  }

  //TODO Remove Absolute
  return (
    <section id="home" className="items-center text-center bw-text font-playfairDisplay flex flex-col gap-12 justify-center  -z-20 overflow-x-clip py-10">
        <Link href={locale === "nl" ? "/nl" : "/"} className='hover:cursor-pointer fixed left-3 top-3 font-black text-xl p-4 hover:p-5 hover:bg-Cmain transition-all duration-500 ease-out rounded-full text-center bg-Cblack'><img src='/icons/home.svg' alt={text.home}/></Link>
      <div className="fixed right-3 top-3 z-10 rounded-full bg-Cblack text-Cwhite">
        <LanguageSwitcher locale={locale} />
      </div>
      <h2 className="text-5xl sm:text-8xl font-bold typewriter">
        {text.projects}
      </h2>

    </section>
  )
}
