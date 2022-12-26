import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { fetchUser, getUser } from "../../redux/authSlice";

const Layout = () => {
  const user = useSelector(getUser);

  return (
    <>
      <Navbar user={user} />
      <Outlet />
    </>
  );
};

export default Layout;
