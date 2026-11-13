import { notFound } from "next/navigation";
import HomePage from "../components/home/home_page";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "nl") notFound();

  return {
    title: "Henry Morris - Portfolio",
    description: "Student informatica aan KU Leuven en cloudengineer.",
  };
}

export default async function LocalizedHome({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "nl") notFound();

  return <HomePage locale={locale} />;
}
