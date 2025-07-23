import Image from "next/image";
import Link from "next/link";
import manny from "@/../public/manny.png";
import "./media-queries.css";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center">
      <section className="flex justify-center items-center size-fit hero">
        <Image
          src={manny}
          alt={
            "Manny sitting at a table with his hands held together, facing forwards, smiling."
          }
          width={400}
          height={150}
          loading="lazy"
          className="rounded-full"
        />
        <div className="flex flex-col hero">
          <div className="flex flex-col flex-wrap hero-titles">
            <h2>Hello there! 👋🏻</h2>
            <h1>I&apos;m Manny</h1>
            <h2>Full-stack developer and</h2>
            <h2>software development instructor</h2>
          </div>
          <ul className="flex flex-col pt-4 gap-1 hero-list">
            <li>
              🪴 Passionate learner, always looking for the next challenge!
            </li>
            <li>🌍 I am also a former ESOL course leader.</li>
            <li>🫱🏻‍🫲🏾 I value working within dynamic and inclusive teams.</li>
            <li>🎯 I am expanding my skills to enter the world of DevOps.</li>
            <li>⚙️ Focused on bash scripts and AWS at the moment.</li>
          </ul>
        </div>
      </section>

      <div className="flex justify-evenly p-6 size-full flex-wrap">
        <section className="flex flex-col items-center">
          <h2 className="p-4">Tech Stack</h2>
          <ul>
            <li>TypeScript</li>
            <li>React</li>
            <li>Next.js</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>RESTful APIs</li>
            <li>PostgreSQL</li>
            <li>Git</li>
          </ul>
        </section>
        <section className="flex flex-col items-center">
          <h2 className="p-4">Development Tools</h2>
          <ul>
            <li>Vite and Vitest</li>
            <li>Supabase</li>
            <li>Vercel</li>
            <li>Render</li>
            <li>GitHub</li>
            <li>Docker</li>
            <li>VSCode</li>
            <li>Trello</li>
            <li>Figma</li>
          </ul>
        </section>
        <section className="flex flex-col items-center">
          <h2 className="p-4">Professional Skills</h2>
          <ul>
            <li>Agile and scrum</li>
            <li>Problem-solving</li>
            <li>Team building</li>
            <li>Effective communication</li>
            <li>Kanban</li>
            <li>Leadership</li>
            <li>Mentoring</li>
          </ul>
        </section>
      </div>
      <p className="p-4">
        💡 Check how I used my stack, tools, and skills in my{" "}
        <Link
          href={"/projects"}
          className="font-bold inline-block text-transparent bg-clip-text bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] hover:text-purple-800 hover:underline"
        >
          projects
        </Link>
        !
      </p>
    </div>
  );
}
