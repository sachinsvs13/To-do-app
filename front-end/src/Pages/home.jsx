import "../Styles/Home.css";
import { IoSunnyOutline } from "react-icons/io5";
import { LuLayoutGrid } from "react-icons/lu";
import { CiCircleList } from "react-icons/ci";
import { BsSortAlphaDown } from "react-icons/bs";
import { CiCalendarDate } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";
import { IoRepeatOutline } from "react-icons/io5";
import axios from "axios";
import { useState } from "react";
import { FaRegCircle } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { CgCalendarToday } from "react-icons/cg";
import { IoMdCalendar } from "react-icons/io";
import { TbCalendarPause } from "react-icons/tb";
import { IoCalendarClearOutline } from "react-icons/io5";
import NavBar from "../Components/NavBar";

export default function Home() {
  const [allTodo, setAllTodo] = useState([]);
  const [createTodo, setCreateTodo] = useState("");
  const [toggleActive, setToggleActive] = useState(false);
  const [calenderActive, setCalenderActive] = useState(false);

  const ShowAllToDo = () => {
    axios
      .get("http://localhost:3000/api/v1/todo")
      .then((res) => setAllTodo(res.data.todo))
      .catch((err) => console.log(err));
  };

  const handleCreateTodo = (e) => {
    e.preventDefault;
    axios
      .post("http://localhost:3000/api/v1/todo", {
        name: createTodo,
      })
      .then(() => {
        setCreateTodo("");
        ShowAllToDo();
      });
  };

  const date = new Date();

  console.log(date);

  const handleToggleActive = () => {
    setToggleActive((prev) => !prev);
  };
  const handleCalenderActive = () => {
    setCalenderActive((prev) => !prev);
  };

  return (
    <main>
      {/* {
        calenderNav.map((i,index) => (
          <span key={index}>{i}</span>
        ))
      } */}
      <div className="setting-container">
        <div className="setting">
          {ShowAllToDo()}
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
          <button className="options" style={{ marginRight: "1rem" }}>
            <BsSortAlphaDown className="icon" />
            Sort
          </button>
        </div>
      </div>
      <div className="task-container">
        <form onSubmit={handleCreateTodo} className="task-input-container">
          <input
            type="text"
            placeholder="Add a task"
            className="task-input"
            value={createTodo}
            onChange={(e) => setCreateTodo(e.target.value)}
          />
        </form>
        <div className="task-options-container">
          <div className="task-options">
            <button
              className="options"
              style={{ color: "black" }}
              onClick={handleCalenderActive}
            >
              <CiCalendarDate />
            </button>
            {calenderActive ? (
              <NavBar
                header="Due"
                Nav={
                  [{ name: "Today", icon: CgCalendarToday },
                  { name: "Tomorrow", icon: IoMdCalendar },
                  { name: "Next Week", icon: TbCalendarPause }]
                }
                footer="Pick a Date"
                Icon={IoCalendarClearOutline}
              />
            ) : null}
            <button
              className="options"
              style={{ color: "black" }}
              onClick={handleToggleActive}
            >
              <CiBellOn />
            </button>
            {toggleActive ? (
              <NavBar
                header="Reminder"
                Nav={["Later Today", "Tomorrow", "Next Week"]}
                footer="Pick a Date & Time"
              />
            ) : null}
            <button className="options" style={{ color: "black" }}>
              <IoRepeatOutline />
            </button>
          </div>
          <div className="task-options">
            <button
              className={`${
                createTodo.length > 0 ? "add-btn" : "add-btn-null"
              }`}
            >
              Add
            </button>
          </div>
        </div>
      </div>
      <ul className="todo-list-container">
        {allTodo.map((item, index) => (
          <div className="todo-list" key={index}>
            <div>
              <FaRegCircle className="circle-icon" />
            </div>
            <div>
              <li key={index} className="todo">
                {item.name}
              </li>
              <button className="todo-btn">
                Tasks <span className="dot"></span>
                <CiCalendarDate className="todo-option-btn" /> Today
                <span className="dot"></span>
                <IoRepeatOutline className="todo-option-btn" />
                <span className="dot"></span>
                <CiBellOn className="todo-option-btn" />
                Today
              </button>
            </div>
          </div>
        ))}
      </ul>
    </main>
  );
}
