import Link from "next/link";

export default function NavBar() {
  return (
    <div className="flex justify-evenly p-2">
      <Link href={"/"}>Home</Link>
      <Link href={"/projects"}>Projects</Link>
      <Link href={"/resume"}>Resume</Link>
    </div>
  );
}
