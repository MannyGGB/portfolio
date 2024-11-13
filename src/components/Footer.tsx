import github_logo from "@/../public/github-mark-white.svg";
import linkedin_logo from "@/../public/LI-In-Bug-crop.png";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex flex-col items-center">
      <p>&copy; Manuel Gonzalez</p>
      <nav className="flex">
        <Link
          href={"https://github.com/MannyGGB"}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Image
            src={github_logo}
            alt={"GitHub Logo"}
            width={25}
            height={20}
            className="m-2 hover:bg-purple-800 hover:rounded-full hover:cursor-pointer"
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
            width={25}
            height={20}
            className="m-2 hover:bg-purple-800  hover:cursor-pointer"
          />
        </Link>
      </nav>
    </div>
  );
}
