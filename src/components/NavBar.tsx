import Link from "next/link";
import Image from "next/image";
import github_logo from "@/../public/github-mark-white.svg";
import linkedin_logo from "@/../public/LI-In-Bug-crop.png";
import email_logo from "@/../public/email_logo.png";
import navbarStyles from "./navbar.module.css";

export default function NavBar() {
  return (
    <nav className={`relative flex`}>
      <div className="flex justify-evenly p-4 size-full">
        <Link
          href={"/"}
          className={`px-5 py-3 font-bold rounded-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] hover:text-purple-800`}
        >
          Home
        </Link>
        <Link
          href={"/projects"}
          className={`px-5 py-3 font-bold rounded-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] hover:text-purple-800`}
        >
          Projects
        </Link>
        {/* <Link
        href={"/resume"}
        className="px-5 py-3 font-bold rounded-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] hover:text-purple-800"
      >
        Resume
      </Link> */}
      </div>
      <div
        className={`flex justify-around p-4 size-fit ${navbarStyles.topnavbar}`}
      >
        <Link
          href={"https://github.com/MannyGGB"}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Image
            src={github_logo}
            alt={"GitHub Logo"}
            width={35}
            height={30}
            className={`m-2 hover:bg-purple-800 hover:rounded-full hover:cursor-pointer`}
          />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/manuel-gonzalez-garcia-de-blas/"}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Image
            src={linkedin_logo}
            alt={"LinkedIn Logo"}
            width={35}
            height={30}
            className={`m-2 hover:bg-purple-800  hover:cursor-pointer`}
          />
        </Link>
        <Link
          href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Image
            src={email_logo}
            alt={"Email Logo"}
            width={35}
            height={30}
            className={`m-2 rounded-2xl hover:bg-purple-800  hover:cursor-pointer`}
          />
        </Link>
      </div>
    </nav>
  );
}
