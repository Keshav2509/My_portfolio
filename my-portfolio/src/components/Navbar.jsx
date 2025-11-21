import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <div className="logo">MyPortfolio</div>
      <div>
        <Link to="/">Home</Link>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}
