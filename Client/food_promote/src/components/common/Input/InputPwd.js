import React, { useState } from "react";
import classes from './Input.module.css'


export default function InputPwd(props) {
  const [showPassword, setShowPassword] = useState(false);
  const { label, password, setPassword } = props;
  return (
    <div className={classes.container}>
      <label>{label}</label>
      <div className={classes.form_group}>
        <input
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button
          type="button"
          className={classes.toggle_password}
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <i className="fa-solid fa-eye-slash"></i> : <i className="fa-solid fa-eye"></i>}
        </button>
      </div>
    </div>
  )
}
