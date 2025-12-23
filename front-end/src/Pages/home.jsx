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
import { MdDeleteOutline } from "react-icons/md";
import NavBar from "../Components/NavBar";

export default function Home() {
  const [allTodo, setAllTodo] = useState([]);
  const [createTodo, setCreateTodo] = useState("");
  const [calenderActive, setCalenderActive] = useState(false);
  const [calenderValue, setCalenderValue] = useState("");
  const [reminderActive, setReminderActive] = useState(false);
  const [reminderValue, setReminderValue] = useState("");
  const [repeatActive, setRepeatActive] = useState(false);
  const [repeatValue, setRepeatValue] = useState("");
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

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

  const Today = (num) => dayNames[new Date().getDay() + num];

  const handleToggleActive = (active) => {
    active((prev) => !prev);
  };

  const handleCalenderClick = (e) => {
    const value = e.currentTarget.value;
    setCalenderValue(value);
    setCalenderActive(false);
  };

  const handleReminderClick = (e) => {
    const value = e.currentTarget.value;
    setReminderValue(value);
    setReminderActive(false);
  };

  const handleRepeatClick = (e) => {
    const value = e.currentTarget.value;
    setRepeatValue(value);
    setRepeatActive(false);
  };

  const handleRemove = (value, active) => {
    value("");
    active(false);
  };

  return (
    <main>
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
              className={`${calenderValue ? "options-selected" : "options"} `}
              style={{ color: "black" }}
              onClick={() => handleToggleActive(setCalenderActive)}
            >
              <CiCalendarDate />
              <span className="option-selected-text">{calenderValue}</span>
            </button>
            {calenderActive ? (
              <NavBar
                value={calenderValue.length}
                handleClick={handleCalenderClick}
                handleRemove={() =>
                  handleRemove(setCalenderValue, setCalenderActive)
                }
                header="Due"
                Nav={[
                  { name: "Today", icon: CgCalendarToday, day: Today(0) },
                  { name: "Tomorrow", icon: IoMdCalendar, day: Today(1) },
                  { name: "Next Week", icon: TbCalendarPause, day: Today(6) },
                ]}
                footer={["Pick a Date", "Remove Due date"]}
                Icon={[IoCalendarClearOutline, MdDeleteOutline]}
              />
            ) : null}
            <button
              className={`${reminderValue ? "options-selected" : "options"} `}
              style={{ color: "black" }}
              onClick={() => handleToggleActive(setReminderActive)}
            >
              <CiBellOn />
              <span className="option-selected-text">{reminderValue}</span>
            </button>
            {reminderActive ? (
              <NavBar
                value={reminderValue.length}
                handleClick={handleReminderClick}
                handleRemove={() =>
                  handleRemove(setReminderValue, setReminderActive)
                }
                header="Reminder"
                Nav={[
                  { name: "Later Today", icon: CgCalendarToday },
                  { name: "Tomorrow", icon: IoMdCalendar },
                  { name: "Next Week", icon: TbCalendarPause },
                ]}
                footer={["Pick a Date & Time", "Remove reminder"]}
                Icon={[IoCalendarClearOutline, MdDeleteOutline]}
              />
            ) : null}
            <button
              className={`${repeatValue ? "options-selected" : "options"} `}
              style={{ color: "black" }}
              onClick={() => handleToggleActive(setRepeatActive)}
            >
              <IoRepeatOutline />
              <span className="option-selected-text">{repeatValue}</span>
            </button>
            {repeatActive ? (
              <NavBar
                value={repeatValue.length}
                handleClick={handleRepeatClick}
                handleRemove={() =>
                  handleRemove(setRepeatValue, setRepeatActive)
                }
                header="Repeat"
                Nav={[
                  { name: "Daily", icon: CgCalendarToday },
                  { name: "Weekdays", icon: IoMdCalendar },
                  { name: "Weekly", icon: TbCalendarPause },
                  { name: "Monthly", icon: TbCalendarPause },
                  { name: "Yearly", icon: TbCalendarPause },
                  { name: "Custom", icon: TbCalendarPause },
                ]}
                footer={["Customized", "Never repeat"]}
                Icon={[IoCalendarClearOutline, MdDeleteOutline]}
              />
            ) : null}
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
