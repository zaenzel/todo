import React from "react";

const CardTodo = ({ data }) => {
  return (
    <div className="p-10 bg-white w-52 text-center flex flex-col justify-between gap-5 rounded-sm shadow-2xl">
      <h1 className="text-2xl font-semibold">{data.title}</h1>
      <h3 className="text-lg">{data.completed ? "finished" : "unfinished"}</h3>
    </div>
  );
};

export default CardTodo;
