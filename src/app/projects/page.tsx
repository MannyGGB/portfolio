import { projectType } from "@/types/types";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MannyGGB - Projects",
  description: "A projects page for MannyGGB",
};

export default async function ProjectsPage() {
  const response = await fetch("http://localhost:3000/api/projects");
  const data = await response.json();
  return (
    <>
      {data.map((project: projectType) => (
        <div
          key={project.id}
          className="flex flex-col items-center bg-slate-900 w-screen"
        >
          <h1>{project.name}</h1>
          <Link
            href={project.link}
            className=" font-bold inline-block text-transparent bg-clip-text bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] hover:text-purple-800"
          >
            Website
          </Link>
          <Image
            src={`https://manyggb-portfolio-server.vercel.app/assets/${project.slug}`}
            alt={project.name}
            width={400}
            height={150}
            loading="lazy"
            className="rounded-md"
          />
          <p className="min-w-fit">{project.description}</p>
        </div>
      ))}
    </>
  );
}
