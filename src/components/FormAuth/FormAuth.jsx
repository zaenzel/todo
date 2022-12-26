import React, { useState } from "react";
import "./FormAuth.css";
import { users } from "../../data/users";

const FormAuth = ({ handleLogin, setKey }) => {
  return (
    <form className="wrap-form" onSubmit={handleLogin}>
      <h5 className="auth-title">Login</h5>
      <div className="textfield space-y-2">
        <p>Masukan 4 angka</p>
        <input
          type="number"
          className="auth-field"
          onChange={(e) => setKey(e.target.value)}
        />
      </div>
      <button className="auth-btn">Login</button>
    </form>
  );
};

export default FormAuth;
