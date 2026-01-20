import axios from "axios";
import { useEffect, useState } from "react";
import { CiBellOn, CiCalendarDate } from "react-icons/ci";
import { FaRegCheckCircle, FaRegCircle } from "react-icons/fa";
import { IoRepeatOutline } from "react-icons/io5";
import { MdOutlineStarOutline } from "react-icons/md";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import "../Styles/DeleteTodo.css";
import TodoFunctions from "./todoFunctions";
import { FaAngleDoubleLeft } from "react-icons/fa";

export default function DeleteTodo({
  id,
  isActive,
  handleToggleActive,
  isNot,
}) {
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

  const updateTodo = (id, item,item1) => {
    axios
      .patch(`http://localhost:3000/api/v1/todo/${id}`, {
        name: todo.name,
        completed: item1,
        important: item,
      })
      .then(() => fetchTodo(idTodo))
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
                {todo.completed ? (
                  <FaRegCheckCircle
                    className="circle-icon"
                    onClick={() => updateTodo(todo._id, null, false)}
                  />
                ) : (
                  <FaRegCircle
                    className="circle-icon"
                    onClick={() => updateTodo(todo._id, null, true)}
                  />
                )}
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
                  className="edit-input"
                />
              </form>
              <div className="star-btn-container">
                <div className="star-btn">
                  {todo.important ? (
                    <MdOutlineStarPurple500
                      onClick={() => updateTodo(todo._id, false)}
                    />
                  ) : (
                    <MdOutlineStarOutline
                      onClick={() => updateTodo(todo._id, true)}
                    />
                  )}
                </div>
              </div>
            </div>
            <TodoFunctions
              handleToggleActive={handleToggleActive}
              classNameContainer="todo-list1"
              className="todo-options"
              classNameSelected="options-selected-todo"
              optionsClassName="sub-options-delete"
            />
          </div>
          <div className="delete-container1">
            <button className="delete-btn" onClick={isNot}>
              <FaAngleDoubleLeft />
            </button>
            <button className="delete-btn">
              <MdDeleteOutline onClick={() => deleteTodo(todo._id)} />
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
