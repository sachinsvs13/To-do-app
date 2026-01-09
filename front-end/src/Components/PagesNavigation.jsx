import { FaGripLines } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";
import "../Styles/PageNavigation.css";
import { useState } from "react";
import { FaRegStar } from "react-icons/fa";
import { CiCalendarDate } from "react-icons/ci";
import { BiTask } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function PagesNavigation() {
  const [IsActive, setIsActive] = useState(true);

  const handleComponent = () => {
    setIsActive((prev) => !prev);
  };
  return (
    <div className={`${IsActive ? "side-component" : "none"}`}>
      {IsActive ? (
        <div>
          <FaGripLines className="top-icon" onClick={handleComponent} />
          <div className="list">
            <Link to="/" className="items">
              <IoSunnyOutline className="icon" />
              My Day
            </Link>
            <Link to="/important" className="items">
              <FaRegStar className="icon" />
              Important
            </Link>
            <Link to="/planned" className="items">
              <CiCalendarDate className="icon" />
              Planned
            </Link>
            <Link to="/tasks" className="items">
              <BiTask className="icon" />
              Task
            </Link>
          </div>
        </div>
      ) : (
        <FaGripLines className="top-icon" onClick={handleComponent} />
      )}
    </div>
  );
}
