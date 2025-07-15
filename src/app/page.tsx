import Image from "next/image";
import Link from "next/link";
import manny from "@/../public/manny.png";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center">
      <section className="flex justify-center items-center size-fit ">
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
        <div className="flex flex-col">
          <h2>Hello there!</h2>
          <h1>I&apos;m Manny</h1>
          <h3>Full-stack developer and software development instructor</h3>
        </div>
      </section>

      <section>
        <article className="flex flex-col">
          <span>
            Passionate learner, always looking for the next challenge!
          </span>
          <span>
            I am also a former ESOL course leader, so I value working with a
            wide variety of dynamic and inclusive teams.
          </span>
          <span>
            I am currently expanding my skills to enter the world of DevOps.
          </span>
        </article>
      </section>
      <div className="flex justify-evenly p-12">
        <section className="size-fit border-rose-500 border-2 p-8 m-2 rounded-xl ">
          <h2 className="text-2xl">Tech Stack</h2>
          <ul>
            <li>React</li>
            <li>Next.js</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>RESTful APIs</li>
            <li>PostgreSQL</li>
            <li>Git</li>
          </ul>
        </section>
        <section className="size-fit border-rose-500 border-2 p-8 m-2 rounded-xl ">
          <h2 className="text-2xl">Tools</h2>
          <ul>
            <li>Vite and Vitest</li>
            <li>Supabase</li>
            <li>Vercel</li>
            <li>Render</li>
            <li>GitHub</li>
            <li>Trello</li>
            <li>Figma</li>
          </ul>
        </section>
        <section className="size-fit border-rose-500 border-2 p-8 m-2 rounded-xl ">
          <h2 className="text-2xl">Skills</h2>
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
        Check how I used my stack and skills in my{" "}
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
