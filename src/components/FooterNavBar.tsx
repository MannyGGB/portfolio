import Link from "next/link";
import Image from "next/image";
import github_logo from "@/../public/github-mark-white.svg";
import linkedin_logo from "@/../public/LI-In-Bug-crop.png";
import email_logo from "@/../public/email_logo.png";
import footernavbarStyles from "./footernavbar.module.css";

export default function NavBar() {
  return (
    <nav
      className={`flex justify-end p-4 size-fit navbar ${footernavbarStyles.footernavbar}`}
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
    </nav>
  );
}
