import React, { useEffect, useState } from "react";
import { VscAdd } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CardTodo from "../../components/CardTodo/CardTodo";
import ModalAddTodo from "../../components/ModalAddTodo/ModalAddTodo";
import Navbar from "../../components/Navbar/Navbar";
import { fetchUser, getUser } from "../../redux/authSlice";
import { fetchTodos, getTodosByUser } from "../../redux/todoSlice";
import "./Home.css";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const todos = useSelector(getTodosByUser);
  const user = useSelector(getUser);
  const [openModal, setOpenModal] = useState(false);

  const id = localStorage.getItem("user");
  if (!id) {
    navigate("/");
  }

  useEffect(() => {
    dispatch(fetchUser(id));
    dispatch(fetchTodos(id));
  }, [dispatch]);

  const ambilIdTodo = () => {
    const idTodo = [];

    todos.map((e) => {
      idTodo.push(e.id);
    });

    if (idTodo.length !== 0) {
      var lastIndex = idTodo.pop();
    }

    return lastIndex;
  };

  return (
    <>
      {openModal ? (
        <ModalAddTodo
          id={id}
          setOpenModal={setOpenModal}
          ambilIdTodo={ambilIdTodo()}
        />
      ) : null}

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
      {openModal && <div className="opacity-75 fixed inset-0 bg-black"></div>}
    </>
  );
};

export default Home;
