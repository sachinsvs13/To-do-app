import { Link } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { useState } from "react";
import "../Styles/Header.css";

export default function Header() {
  const [lightDarkMode, setLightDarkMode] = useState(true);

  const handleLightDarkMode = () => {
    setLightDarkMode((prev) => !prev);
  };
  return (
    <header>
      <Link to={"/"} className="To-do-icon">
        To Do
      </Link>
      <div className="search-container">

        <input type="text" placeholder="Search" className="search-bar" />
      </div>
      <div className="light-dark-mode">
        {lightDarkMode ? (
            <CiLight onClick={handleLightDarkMode}  />
        ) : (
          <MdDarkMode onClick={handleLightDarkMode} />
        )}
      </div>
    </header>
  );
}
