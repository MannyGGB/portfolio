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
        <div key={project.id}>
          <h1>{project.name}</h1>
          <Link href={project.link}>Website</Link>
          <Image
            src={`https://manyggb-portfolio-server.vercel.app/assets/${project.slug}`}
            alt={project.name}
            width={400}
            height={150}
          />
          <p>{project.description}</p>
        </div>
      ))}
    </>
  );
}
