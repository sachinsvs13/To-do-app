import { Link } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { useState } from "react";
import "../Styles/Header.css";
import { FaRegUserCircle } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";

export default function Header() {
  const [lightDarkMode, setLightDarkMode] = useState(true);
  const [userLogin, setUserLogin] = useState(false);

  const handleSwitch = (para) => {
    para((prev) => !prev);
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
          <CiLight onClick={() => handleSwitch(setLightDarkMode)} />
        ) : (
          <MdDarkMode onClick={() => handleSwitch(setLightDarkMode)} />
        )}
        {userLogin ? (
          <Link to="/login" className="user-link">
            <FaUserCircle
              className="user-icon"
              onClick={() => handleSwitch(setUserLogin)}
            />
          </Link>
        ) : (
          <Link to="/login" className="user-link">
            <FaRegUserCircle
              className="user-icon"
              onClick={() => handleSwitch(setUserLogin)}
            />
          </Link>
        )}
      </div>
    </header>
  );
}
