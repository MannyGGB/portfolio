import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <Link href={"/"}>Home</Link>
      <Link href={"/projects"}>Projects</Link>
      <Link href={"/resume"}>Resume</Link>
    </>
  );
}
