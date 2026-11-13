'use client';
import Link from "next/link";
import { useEffect, useState } from "react";
import type { Locale } from "../../i18n";
import { translations } from "../../i18n";
import LanguageSwitcher from "./language_switcher";

export default function Navbar({ locale }: { locale: Locale }) {
    const text = translations[locale];
    const sections = [
        { id: 'home', name: text.home, href: '#home' },
        { id: 'projects', name: text.projects, href: '#projects' },
        { id: 'about', name: text.about, href: '#about' },
        { id: 'contact', name: text.contact, href: '#contact' },
    ];

    const minScroll: number = 150;

    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const [activeSection, setActiveSection] = useState<string>('');
    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        if (scrollPosition > minScroll) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }

        const sectionElements = sections.map(section => document.getElementById(section.id));
        const currentSection = sectionElements.find(section => {
            if (section) {
                const rect = section.getBoundingClientRect();
                // console.log(rect.top, rect.bottom)
                return rect.top <= 0 && rect.bottom > 0;
            }
            return false;
        });
        if (currentSection) {
            setActiveSection(currentSection.id);
        }
    };


    useEffect(() => {
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className="container items-center flex mx-auto justify-center">
            <div className={`z-20 hidden sm:flex justify-center fixed px-4 rounded-full nav-links font-bold text-lg bw-text bg-white dark:bg-[#131920] duration-500 ease-out ${isScrolled ? 'bg-opacity-75 mt-24 gap-4 py-2' : 'bg-opacity-0 mt-32 gap-8 py-3 '} drop-shadow-sm `}>

                {sections.map(section => <Link href={section.href} key={section.id} className={`transition-all selected hover:text-Cmain ${activeSection === section.id ? 'bg-opacity-100' : 'bg-opacity-0'}`} >{section.name}</Link>)}
                <LanguageSwitcher locale={locale} />
            </div>
            <div className="fixed right-3 top-3 z-20 rounded-full bg-Cblack text-Cwhite sm:hidden">
                <LanguageSwitcher locale={locale} />
            </div>
        </nav>
    )
}
