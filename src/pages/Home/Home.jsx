import React, { useEffect, useState } from "react";
import { VscAdd } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import CardTodo from "../../components/CardTodo/CardTodo";
import Navbar from "../../components/Navbar/Navbar";
import { fetchUser, getUser } from "../../redux/authSlice";
import { fetchTodos, getTodosByUser } from "../../redux/todoSlice";
import "./Home.css";

const Home = () => {
  const dispatch = useDispatch();
  const todos = useSelector(getTodosByUser);
  const user = useSelector(getUser);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    dispatch(fetchTodos(user.id));
  }, [dispatch]);

  return (
    <>
      <Navbar user={user} />
      <div className="min-h-screen bg-gradient-to-tr from-purple-800 via-blue-900 to-emerald-400 p-10">
        <div className="wrap-main gap-5 flex flex-wrap justify-center">
          <div
            className="btn-add-todo"
            onClick={(e) => setOpenModal(!openModal)}
          >
            <VscAdd className="text-2xl font-semibold" />
            <p>Add Todo</p>
          </div>
          {Object.keys(todos).length !== 0
            ? todos.map((e, i) => {
                return <CardTodo key={i} data={e} />;
              })
            : null}
        </div>
      </div>
    </>
  );
};

export default Home;
