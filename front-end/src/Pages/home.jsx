import "../Styles/Home.css";
import { IoSunnyOutline } from "react-icons/io5";
import { LuLayoutGrid } from "react-icons/lu";
import { CiCircleList } from "react-icons/ci";
import { BsSortAlphaDown } from "react-icons/bs";
import { CiCalendarDate } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";
import { IoRepeatOutline } from "react-icons/io5";
import axios from "axios";
import { FaRegCircle } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
import { useEffect, useState } from "react";
import "react-calendar/dist/Calendar.css";
import { MdOutlineStarOutline } from "react-icons/md";
import { MdOutlineStarPurple500 } from "react-icons/md";
import DeleteTodo from "../Components/DeleteTodo";
import TodoFunctions from "../Components/todoFunctions";

export default function Home({ settingColor }) {
  const [allTodo, setAllTodo] = useState([]);
  const [createTodo, setCreateTodo] = useState("");
  const [id, setId] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [isGrid, setIsGrid] = useState(false);

  console.log(allTodo);

  const ShowAllToDo = () => {
    axios
      .get("http://localhost:3000/api/v1/todo")
      .then((res) => setAllTodo(res.data.todo))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    ShowAllToDo();
  }, []);

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

  const handleToggleActive = (active) => {
    active((prev) => !prev);
  };

  const handleImportantChange = (id, item, item1) => {
    axios
      .patch(`http://localhost:3000/api/v1/todo/${id}`, {
        important: item,
        completed: item1,
      })
      .then(() => {
        ShowAllToDo();
      })
      .catch((err) => {
        console.error("There was an error updating the task!", err.message);
      });
  };

  return (
    <>
      <main>
        <div className="setting-container">
          <div className="setting">
            {ShowAllToDo()}
            {
              //top
            }
            <h3 className="options" style={{ color: settingColor }}>
              <IoSunnyOutline className="icon" />
              My Day
            </h3>
            <button
              className={`options ${isGrid ? "active-btn" : ""}`}
              style={{ color: settingColor }}
              onClick={() => setIsGrid(true)}
            >
              <LuLayoutGrid className="icon" />
              Grid
            </button>
            <button
              className={`options ${isGrid ? "" : "active-btn"}`}
              style={{ color: settingColor }}
              onClick={() => setIsGrid(false)}
            >
              <CiCircleList className="icon" />
              List
            </button>
          </div>
          <div className="setting">
            <button
              className="options"
              style={{ marginRight: "1rem", color: settingColor }}
            >
              <BsSortAlphaDown className="icon" />
              Sort
            </button>
          </div>
        </div>
        <div className="task-container">
          <form onSubmit={handleCreateTodo} className="task-input-container">
            {
              // add a todo
            }
            <input
              type="text"
              placeholder="Add a task"
              className="task-input"
              value={createTodo}
              onChange={(e) => setCreateTodo(e.target.value)}
            />
          </form>
          {
            // All Todo list
          }
          <div className="task-options-container">
            <TodoFunctions
              handleToggleActive={handleToggleActive}
              classNameContainer="task-options"
              className="options"
              classNameSelected="options-selected"
              optionsClassName="sub-options"
            />
            <div className="task-options">
              <button
                className={`${
                  createTodo.length > 0 ? "add-btn" : "add-btn-null"
                }`}
                onClick={handleCreateTodo}
              >
                Add
              </button>
            </div>
          </div>
        </div>
        {isGrid ? (
          <ul className="todo-grid-container">
            <div style={{ boxShadow: "0px 0px 1px 0px rgb(0, 0, 0)" }}>
              <div className="todo-grid-header" style={{ fontSize: "0.9rem" }}>
                <spam className="todo-grid-title">Title</spam>
                <spam className="todo-grid-due-date">Due Date</spam>
                <spam className="todo-grid-importance">Importance</spam>
              </div>
              {allTodo.map((item, index) => (
                <>
                  <div className="todo-grid-header" key={index}>
                    <div>
                      {item.completed ? (
                        <FaRegCheckCircle
                          className="circle-icon"
                          onClick={() =>
                            handleImportantChange(item._id, null, false)
                          }
                        />
                      ) : (
                        <FaRegCircle
                          className="circle-icon"
                          onClick={() =>
                            handleImportantChange(item._id, null, true)
                          }
                        />
                      )}
                    </div>
                    <div
                      className="todo-name-container"
                      onClick={() => {
                        setId(item._id);
                        setIsActive(true);
                      }}
                    >
                      <li key={index} className="todo">
                        {item.name}
                      </li>
                    </div>
                    <div className="todo-grid-due-date">
                      <span style={{ marginLeft: "0.2rem" }}>14-05-2025</span>
                    </div>
                    <div className="star-btn-grid-container">
                      <div className="star-btn">
                        {item.important ? (
                          <MdOutlineStarPurple500
                            onClick={() =>
                              handleImportantChange(item._id, false)
                            }
                          />
                        ) : (
                          <MdOutlineStarOutline
                            onClick={() =>
                              handleImportantChange(item._id, true)
                            }
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </ul>
        ) : (
          <ul className="todo-list-container">
            {allTodo.map((item, index) => (
              <>
                <div className="todo-list" key={index}>
                  <div>
                    {item.completed ? (
                      <FaRegCheckCircle
                        className="circle-icon"
                        onClick={() =>
                          handleImportantChange(item._id, null, false)
                        }
                      />
                    ) : (
                      <FaRegCircle
                        className="circle-icon"
                        onClick={() =>
                          handleImportantChange(item._id, null, true)
                        }
                      />
                    )}
                  </div>
                  <div
                    className="todo-container"
                    onClick={() => {
                      setId(item._id);
                      setIsActive(true);
                    }}
                  >
                    <li key={index} className="todo">
                      {item.name}
                    </li>
                    <div className="todo-btn">
                      Tasks <span className="dot"></span>
                      <CiCalendarDate className="todo-option-btn" /> Today
                      <span className="dot"></span>
                      <IoRepeatOutline className="todo-option-btn" />
                      <span className="dot"></span>
                      <CiBellOn className="todo-option-btn" />
                      Today
                    </div>
                  </div>
                  <div className="star-btn-container">
                    <div className="star-btn">
                      {item.important ? (
                        <MdOutlineStarPurple500
                          onClick={() => handleImportantChange(item._id, false)}
                        />
                      ) : (
                        <MdOutlineStarOutline
                          onClick={() => handleImportantChange(item._id, true)}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </>
            ))}
          </ul>
        )}
      </main>
      <DeleteTodo
        id={id}
        isActive={isActive}
        handleToggleActive={handleToggleActive}
        isNot={() => setIsActive(false)}
      />
    </>
  );
}
