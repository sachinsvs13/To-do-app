import axios from "axios";
import { useEffect, useState } from "react";
import { CiBellOn, CiCalendarDate } from "react-icons/ci";
import { FaRegCircle } from "react-icons/fa";
import { IoRepeatOutline } from "react-icons/io5";
import { MdOutlineStarOutline } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import "../Styles/DeleteTodo.css";
import TodoFunctions from "./todoFunctions";

export default function DeleteTodo({ id, isActive, handleToggleActive,isNot }) {
  const [todo, setTodo] = useState([]);

  const handleNameChange = (e) => {
    setTodo({ ...todo, name: e.target.value });
  };

  const idTodo = id;

  const fetchTodo = (id) => {
    axios
      .get(`http://localhost:3000/api/v1/todo/${id}`)
      .then((res) => {
        setTodo(res.data.todo);
      })
      .catch((err) => console.error(err.message));
  };
  useEffect(() => {
    fetchTodo(idTodo);
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
  const deleteTodo = (id) => {
    axios
      .delete(`http://localhost:3000/api/v1/todo/${id}`)
      .then(() => fetchTodo(idTodo))
      .catch((err) => {
        console.error("There was an error deleting the task!", err.message);
      });
  };

  return (
    <div className="delete-container">
      {isActive ? (
        <div className="container">
          <div className="todo-list-container">
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
              className="todo-options"
            />
          </div>
          <div className="delete-container1">
            <i
              style={{ borderTop: "1px solid #9a9a9a", margin: "0.2rem 0" }}
            ></i>
            <button className="delete-btn" onClick={isNot}>Delete Task</button>
            <button className="delete-btn">
              <MdDeleteOutline onClick={() => deleteTodo(todo._id)} />
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
