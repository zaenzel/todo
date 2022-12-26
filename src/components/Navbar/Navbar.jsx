import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../redux/authSlice";

const Navbar = ({ user }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };
  return (
    <nav className="">
      <div className="flex justify-between items-center px-10 bg-gradient-to-tr  from-purple-200 via-blue-200 to-emerald-400">
        <div className="left-nav p-3 cursor-pointer">
          <h1 className="text-2xl font-bold">{user.name}</h1>
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
