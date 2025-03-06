import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MannyGGB - Resume",
  description: "A resume page for MannyGGB",
};

export default function ResumePage() {
  return (
    <div className="flex flex-col items-center">
      <section className="flex flex-col items-center size-fit border-rose-500 border-2 p-2 m-2 rounded-xl ">
        <h1>Work in progress</h1>
        <p>🖇️ 💾 🧪</p>
      </section>
    </div>
  );
}
