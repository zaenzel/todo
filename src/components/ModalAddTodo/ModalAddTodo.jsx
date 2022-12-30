import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, addTodoNoApi, getAddStatus } from "../../redux/todoSlice";

const ModalAddTodo = ({ id, setOpenModal, ambilIdTodo }) => {
  const dispatch = useDispatch();
  const addStatus = useSelector(getAddStatus);
  const [todo, setTodo] = useState({
    userId: parseInt(id),
    id: ambilIdTodo + 1,
    title: "",
    completed: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(addTodoNoApi(todo));
    if (addStatus) {
      setOpenModal(false);
    }
  };

  return (
    <div className="z-10 py-12 px-10 absolute bg-white left-1/2 -translate-x-1/2 top-28 flex flex-col gap-5">
      <AiOutlineCloseCircle
        className="text-2xl absolute right-2 top-3 cursor-pointer text-neutral-600"
        onClick={(e) => setOpenModal(false)}
      />
      <h1 className="text-xl font-semibold text-center">Add Todo</h1>
      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <div className="title-form">
          <p>Title</p>
          <input
            type="text"
            className="py-2 px-3 rounded-sm outline-offset-1 border border-neutral-300"
            onChange={(e) => setTodo({ ...todo, title: e.target.value })}
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-green-400 rounded-sm text-white font-semibold shadow hover:bg-green-600"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default ModalAddTodo;
