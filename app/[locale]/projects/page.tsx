import { notFound } from "next/navigation";
import ProjectsPage from "../../components/projects/projects_page";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "nl") notFound();

  return {
    title: "Projecten - Henry Morris",
    description: "Bekijk de projecten van Henry Morris.",
  };
}

export default async function LocalizedProjects({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "nl") notFound();

  return <ProjectsPage locale={locale} />;
}
