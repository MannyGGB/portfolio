import Link from "next/link";

export default function NavBar() {
  return (
    <div className="flex justify-evenly p-4">
      <Link
        href={"/"}
        className="px-5 py-3 font-bold rounded-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] hover:text-purple-800"
      >
        Home
      </Link>
      <Link
        href={"/projects"}
        className="px-5 py-3 font-bold rounded-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] hover:text-purple-800"
      >
        Projects
      </Link>
      <Link
        href={"/resume"}
        className="px-5 py-3 font-bold rounded-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] hover:text-purple-800"
      >
        Resume
      </Link>
    </div>
  );
}
