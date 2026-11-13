'use client'
import { useRef, useState } from "react"
import Reveal from "../partials/effects/revealonscroll";
import Link from "next/link";
import type { Locale } from "../../i18n";
import { translations } from "../../i18n";

export default function ContactNoForm({ locale }: { locale: Locale }) {
    const text = translations[locale];


    return (
        <section id="contact" className="bw-extreme-text py-20 xl:pb-40 ">
            <div  className="container mx-auto items-center text-center ">
                <div className="container items-center mx-auto max-w-96 gap-12 [&>*]:py-4">
                    <Reveal>
                        <h2 className="font-playfairDisplay text-5xl ">{text.contactTitle}</h2>
                    </Reveal>
                    <Reveal>
                        <p className="text-xl">{text.contactText}</p>
                    </Reveal>              
                    <Reveal className="text-xl">
                        {text.email}: <Link href="mailto:henrymprof@gmail.com" target="_blank" className="text-Cmain dark:text-blue-100 underline hover:text-[1.3rem] transition-all duration-300">henrymprof@gmail.com</Link>
                    </Reveal>  
                </div>
            </div>
        </section>
    )
}
