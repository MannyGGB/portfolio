import FooterNavBar from "./FooterNavBar";

export default function Footer() {
  return (
    <footer className="flex justify-around">
      <div className="flex flex-col items-center justify-center mt-auto">
        <p className="p-2 text-center">&copy; 2025 Manuel Gonzalez</p>
      </div>
      <FooterNavBar />
    </footer>
  );
}
