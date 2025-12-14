import "../Styles/Home.css";
import { IoSunnyOutline } from "react-icons/io5";
import { LuLayoutGrid } from "react-icons/lu";
import { CiCircleList } from "react-icons/ci";
import { BsSortAlphaDown } from "react-icons/bs";
import { CiCalendarDate } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";
import { IoRepeatOutline } from "react-icons/io5";

export default function Home() {
  return (
    <main>
      <div className="setting-container">
        <div className="setting">
          <h3 className="options">
            <IoSunnyOutline className="icon" />
            My Day
          </h3>
          <button className="options">
            <LuLayoutGrid className="icon" />
            Grid
          </button>
          <button className="options">
            <CiCircleList className="icon" />
            List
          </button>
        </div>
        <div className="setting">
          <button className="options" style={{marginRight : "1rem"}}>
            <BsSortAlphaDown className="icon" />
            Sort
          </button>
        </div>
      </div>
      <div className="task-container">
        <input type="text" placeholder="Add a task" className="task-input" />
        <div className="task-options-container">
          <div className="task-options">
            <button className="options" style={{color : 'black'}}>
              <CiCalendarDate />
            </button>
            <button className="options" style={{color : 'black'}}>
              <CiBellOn />
            </button>
            <button className="options" style={{color : 'black'}}>
              <IoRepeatOutline />
            </button>
          </div>
          <div className="task-options">
            <button className="add-btn">Add</button>
          </div>
        </div>
      </div>
    </main>
  );
}
