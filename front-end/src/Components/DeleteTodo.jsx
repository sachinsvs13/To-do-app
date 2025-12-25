import axios from "axios";
import { useEffect, useState } from "react";
import { CiBellOn, CiCalendarDate } from "react-icons/ci";
import { FaRegCircle } from "react-icons/fa";
import { IoRepeatOutline } from "react-icons/io5";
import { MdOutlineStarOutline } from "react-icons/md";
import "../Styles/DeleteTodo.css";

export default function DeleteTodo({ id,isActive }) {
  const [showTodo, setShowTodo] = useState([]);

  
  const idTodo = id;
  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/v1/todo/${idTodo}`)
      .then((res) => {
        setShowTodo(res.data.todo);
      })
      .catch((err) => console.error(err.message));
  },[idTodo]);


  return (
    <div className="delete-container">
      {isActive ? (
        <div>
          <ul className="todo-list-container">
            <div className="todo-list">
              <div>
                <FaRegCircle className="circle-icon" />
              </div>
              <div>
                <li className="todo">{showTodo.name}</li>
                <button className="todo-btn">
                  Tasks <span className="dot"></span>
                  <CiCalendarDate className="todo-option-btn" /> Today
                  <span className="dot"></span>
                  <IoRepeatOutline className="todo-option-btn" />
                  <span className="dot"></span>
                  <CiBellOn className="todo-option-btn" />
                  Today
                </button>
                <div className="star-btn-container">
                  <button className="star-btn">
                    <MdOutlineStarOutline />
                  </button>
                </div>
              </div>
            </div>
          </ul>
        </div>
      ) : null}
    </div>
  );
}
