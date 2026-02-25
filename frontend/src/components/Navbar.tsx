import "./Navbar.css";
import type { Dispatch, SetStateAction } from "react";
import { FaBars } from "react-icons/fa";

interface NavbarProps {
  setOpen: Dispatch<SetStateAction<boolean>>;
  setSearch: Dispatch<SetStateAction<string>>;
}

export default function Navbar({ setOpen, setSearch }: NavbarProps) {

  return (
    <div className="navbar">

      {/* MENU BUTTON */}
      <button
        className="menu-btn"
        onClick={() => setOpen(prev => !prev)}
      >
        <FaBars size={22} />
      </button>

      {/* LOGO */}
      <h1 className="logo">CineHub</h1>

      {/* SEARCH */}
      <input
        className="search"
        placeholder="Search movies..."
        onChange={(e) => setSearch(e.target.value)}
      />

    </div>
  );
}