import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../redux/authSlice";
import { clearState } from "../../redux/todoSlice";

const Navbar = ({ user }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    dispatch(clearState());
    navigate("/");
  };

  return (
    <nav className="">
      <div className="flex justify-between items-center px-10 bg-gradient-to-tr  from-purple-200 via-blue-200 to-emerald-400">
        <div className="left-nav p-3 cursor-pointer">
          {user && Object.keys(user).length !== 0
            ? user.map((e, i) => {
                return (
                  <h1 className="text-2xl font-bold" key={i}>
                    {e.name}
                  </h1>
                );
              })
            : null}
        </div>
        <div className="right-nav">
          <button
            className="py-2 px-5 bg-yellow-300 rounded-md shadow-md font-semibold text-neutral-800 hover:bg-yellow-400"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
