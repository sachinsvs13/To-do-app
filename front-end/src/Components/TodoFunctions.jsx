import { useState } from "react";
import NavBar from "../Components/NavBar";
import { CgCalendarToday } from "react-icons/cg";
import { IoMdCalendar } from "react-icons/io";
import { TbCalendarPause } from "react-icons/tb";
import { CiCalendarDate } from "react-icons/ci";
import { IoCalendarClearOutline } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";
import { CiBellOn } from "react-icons/ci";
import { IoRepeatOutline } from "react-icons/io5";

import Calendar from "react-calendar";

export default function TodoFunctions({
  handleToggleActive,
  classNameContainer,
  className,
}) {
  const [calenderActive, setCalenderActive] = useState(false);
  const [calenderValue, setCalenderValue] = useState("");
  const [reminderActive, setReminderActive] = useState(false);
  const [reminderValue, setReminderValue] = useState("");
  const [repeatActive, setRepeatActive] = useState(false);
  const [repeatValue, setRepeatValue] = useState("");
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

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

  const Today = (num) => dayNames[new Date().getDay() + num];

  return (
    <div className={classNameContainer}>
      <button
        className={`${calenderValue ? "options-selected" : className} `}
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
          handleRemove={() => handleRemove(setCalenderValue, setCalenderActive)}
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
        className={`${reminderValue ? "options-selected" : className} `}
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
          handleRemove={() => handleRemove(setReminderValue, setReminderActive)}
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
        className={`${repeatValue ? "options-selected" : className} `}
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
          handleRemove={() => handleRemove(setRepeatValue, setRepeatActive)}
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
  );
}
