import { FaGripLines } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";
import "../Styles/PageNavigation.css";
import { useState } from "react";

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
              <IoSunnyOutline className="icon" />
              My Day
            </li>
            <li className="items">
              <IoSunnyOutline className="icon" />
              My Day
            </li>
            <li className="items">
              <IoSunnyOutline className="icon" />
              My Day
            </li>
          </ul>
        </div>
      ) : (
        <FaGripLines className="top-icon" onClick={handleComponent} />
      )}
    </div>
  );
}
