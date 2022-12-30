import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FormAuth from "../../components/FormAuth/FormAuth";
import { users } from "../../data/users";
import { fetchUser, getUser, login } from "../../redux/authSlice";
import { fetchTodos } from "../../redux/todoSlice";
import "./Auth.css";

const Auth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [status, setStatus] = useState(false);
  const [key, setKey] = useState(0);

  /*
  const validate = (key) => {
    users.map((e, i) => {
      if (e === parseInt(key)) {
        localStorage.setItem("user", i + 1);
        dispatch(fetchUser(i + 1));
        dispatch(fetchTodos(i + 1));
        setStatus(true);
      }
    });
  };
  */

  const handleLogin = (e) => {
    e.preventDefault();
    users.map((e, i) => {
      if (e === parseInt(key)) {
        localStorage.setItem("user", i + 1);
        setStatus(true);
      }
    });
    setTimeout(() => {
      navigate("/home");
    }, 2500);
  };

  return (
    <div
      className="container-auth"
      style={{ backgroundImage: `url(${"./img/bg-sky.jpg"})` }}
    >
      <div
        className={`modal-auth absolute ${
          status ? `top-10` : `-top-20`
        } left-1/2 -translate-x-1/2 transition-transform ease-in-out py-3 px-6 bg-green-500 rounded-md text-white font-semibold`}
      >
        Berhasil
      </div>
      <FormAuth handleLogin={handleLogin} setKey={setKey} />
    </div>
  );
};

export default Auth;
