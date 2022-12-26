import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Auth from "./pages/Auth/Auth";
import Home from "./pages/Home/Home";
import { fetchUser, getUser } from "./redux/authSlice";
import { fetchTodos } from "./redux/todoSlice";

function App() {
  const currentUser = useSelector(getUser);
  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/" />;
  };

  return (
    <Routes>
      <Route path="/">
        <Route index element={<Auth />} />
        <Route
          path="home"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
