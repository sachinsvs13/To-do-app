import axios from "axios";
import { useEffect, useState } from "react";
import { CiBellOn, CiCalendarDate } from "react-icons/ci";
import { FaRegCircle } from "react-icons/fa";
import { IoRepeatOutline } from "react-icons/io5";
import { MdOutlineStarOutline } from "react-icons/md";
import "../Styles/DeleteTodo.css";
import TodoFunctions from "./todoFunctions";

export default function DeleteTodo({ id, isActive, handleToggleActive }) {
  const [todo, setTodo] = useState([]);

  const handleNameChange = (e) => {
    setTodo({ ...todo, name: e.target.value });
  };

  const idTodo = id;
  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/v1/todo/${idTodo}`)
      .then((res) => {
        setTodo(res.data.todo);
      })
      .catch((err) => console.error(err.message));
  }, [idTodo]);

  const updateTodo = (id) => {
    axios
      .patch(`http://localhost:3000/api/v1/todo/${id}`, {
        name: todo.name,
        completed: todo.completed,
      })
      .then(() => console.log("success"))
      .catch((err) => {
        console.error("There was an error updating the task!", err.message);
      });
  };
  return (
    <div className="delete-container">
      {isActive ? (
        <div>
          <ul className="todo-list-container">
            <div className="todo-list">
              <div>
                <FaRegCircle className="circle-icon" />
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  updateTodo(idTodo);
                }}
                className="edit-form"
              >
                <input
                  type="text"
                  value={todo.name}
                  onChange={handleNameChange}
                />
              </form>
              <div className="star-btn-container">
                <div className="star-btn">
                  <MdOutlineStarOutline />
                </div>
              </div>
            </div>
            <TodoFunctions
              handleToggleActive={handleToggleActive}
              classNameContainer="todo-list1"
              className ='todo-options'
            />
            <div className="todo-list">
              <IoRepeatOutline className="todo-option-btn" /> Repeat
            </div>
            <div className="todo-list">
              <CiBellOn className="todo-option-btn" /> Remind me
            </div>
            <div className="todo-btn"></div>
          </ul>
        </div>
      ) : null}
    </div>
  );
}
