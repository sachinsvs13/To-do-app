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
  const [logOut, setLogOut] = useState(false);
  const token = localStorage.getItem("token");

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
          <div>
            <CiLight onClick={() => handleSwitch(setLightDarkMode)} />
          </div>
        ) : (
          <MdDarkMode onClick={() => handleSwitch(setLightDarkMode)} />
        )}
      </div>
      <div className="user-flex">
        {token ? (
          <>
            <div className="user-container">
              <Link className="user-icon">
                <FaUserCircle
                  className="user-icon"
                  onClick={() => handleSwitch(setLogOut)}
                />
              </Link>
              <span
                className="user-name"
                onClick={() => handleSwitch(setLogOut)}
              >
                sachin
              </span>
            </div>
            <div>
              {logOut ? (
                <div className="logout-model">
                  <button
                    onClick={() => {
                      localStorage.removeItem("token");
                      setLogOut(false);
                      window.location.reload();
                    }}
                    className="logout-buttons"
                  >
                    Log Out
                  </button>
                </div>
              ) : null}
            </div>
          </>
        ) : (
          <>
            <div className="user-container">
              <Link to="/login" className="user-icon">
                <FaRegUserCircle className="user-icon" />
              </Link>
              <Link to="/login" style={{textDecoration : 'none'}}>
                <span className="user-name" >Login</span>
              </Link>
            </div>
          </>
        )}
      </div>
    </header>
  );
}
