import { projectType } from "@/types/types";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MannyGGB - Projects",
  description: "A projects page for MannyGGB",
};
const url = "https://mannyggb-portfolio.vercel.app";
// const localUrl = "http://localhost:3000";
export default async function ProjectsPage() {
  const response = await fetch(`${url}/api/projects`);
  const data = await response.json();

  // console.log(data);
  return (
    <h1>Projects</h1>
    // <div className="flex justify-center">
    //   {data.map((project: projectType) => (
    //     <div
    //       key={project.id}
    //       className="flex flex-col items-center bg-slate-900 max-w-sm"
    //     >
    //       <h1>{project.name}</h1>
    //       <Link
    //         href={project.link}
    //         className=" font-bold inline-block text-transparent bg-clip-text bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] hover:text-purple-800"
    //       >
    //         Website
    //       </Link>
    //       <Image
    //         src={`https://mannyggb-portfolio-server.vercel.app/api/assets/${project.slug}`}
    //         alt={project.name}
    //         width={400}
    //         height={150}
    //         loading="lazy"
    //         className="rounded-md"
    //       />
    //       <p className="min-w-fit">{project.description}</p>
    //     </div>
    //   ))}
    // </div>
  );
}
