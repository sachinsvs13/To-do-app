import { FaGripLines } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";
import "../Styles/PageNavigation.css";
import { useState } from "react";
import { FaRegStar } from "react-icons/fa";
import { CiCalendarDate } from "react-icons/ci";
import { BiTask } from "react-icons/bi";



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
          <ul className="list">
            <li className="items">
              <IoSunnyOutline className="icon" />
              My Day
            </li>
            <li className="items">
              <FaRegStar className="icon" />
              Important
            </li>
            <li className="items">
              <CiCalendarDate className="icon" />
              Planned
            </li>
            <li className="items">
              <BiTask className="icon" />
              Task
            </li>
          </ul>
        </div>
      ) : (
        <FaGripLines className="top-icon" onClick={handleComponent} />
      )}
    </div>
  );
}
