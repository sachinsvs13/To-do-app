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
  const [activeItem, setActiveItem] = useState(1);

  const handleComponent = () => {
    setIsActive((prev) => !prev);
  };

  const pages = [
    { name: "My Day", icon: <IoSunnyOutline className="icon" />, path: "/" ,id : 1},
    { name: "Important", icon: <FaRegStar className="icon" />, path: "/important",id : 2 },
    { name: "Planned", icon: <CiCalendarDate className="icon" />, path: "/planned",id : 3 },
    { name: "Task", icon: <BiTask className="icon" />, path: "/tasks" ,id : 4}
  ]
  console.log(activeItem)
  return (
    <div className={`${IsActive ? "side-component" : "none"}`}>
      {IsActive ? (
        <div>
          <FaGripLines className="top-icon" onClick={handleComponent} />
          {
            
            pages.map((page) => (
              <Link
                key={page.name}
                to={page.path}
                onClick={() => setActiveItem(page.id)}
                className={`items ${activeItem === page.id ? 'active' : ''}`}
              >
                {page.icon}
                {page.name}
              </Link>
            ))}
{/* 
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
            </Link> */}

        </div>
      ) : (
        <FaGripLines className="top-icon" onClick={handleComponent} />
      )}
    </div>
  );
}
