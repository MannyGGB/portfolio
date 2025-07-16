import { projectType } from "@/types/types";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MannyGGB - Projects",
  description: "A projects page for MannyGGB",
};

export default async function ProjectsPage() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/projects`
  );
  const data = await response.json();

  return (
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] flex-col justify-center">
      {data.map((project: projectType) => (
        <div
          key={project.id}
          className="flex flex-col items-center bg-slate-900 max-w-sm max-h-fit m-4 p-2 rounded-xl border-rose-500 border-2"
        >
          <h2>{project.name}</h2>
          {project.link === "#" ? null : (
            <Link
              href={project.link}
              className="text-xl font-bold inline-block text-transparent bg-clip-text bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] hover:text-purple-800 hover:underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              Website
            </Link>
          )}

          <Image
            src={`https://mannyggb-portfolio-server.vercel.app/api/assets/${project.slug}`}
            alt={project.name}
            width={400}
            height={150}
            loading="lazy"
            className="rounded-xl p-2"
          />
          <p className="min-w-fit p-2">{project.description}</p>
        </div>
      ))}
    </div>
  );
}
