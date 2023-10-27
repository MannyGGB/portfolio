import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";

export default function Header() {
  return (
    <>
      <h1>Welcome to my page!</h1>

      <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/about">About Me</Link>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
