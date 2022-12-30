import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser, getUser } from "../../redux/authSlice";
import { fetchTodos, getTodosByUser } from "../../redux/todoSlice";
import { logout } from "../../redux/authSlice";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

const Error = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const todos = useSelector(getTodosByUser);
  const user = useSelector(getUser);

  const id = localStorage.getItem("user");
  if (!id) {
    navigate("/");
  }

  useEffect(() => {
    dispatch(fetchTodos(id));
    dispatch(fetchUser(id));
  }, [dispatch]);

  return (
    <>
      <Navbar user={user} />
      <div className="flex">
        <div>
          {Object.keys(todos).length !== 0 ? (
            todos.map((e, i) => {
              return <p key={i}>{e.title}</p>;
            })
          ) : (
            <p>error</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Error;
