import axios from "axios";
import { LoginBar } from "components/LoginBar";
import UIButton from "components/UI/Button/Button";
import React, { useState } from "react";

function initialState() {
  return { userName: "", password: "" };
}

export const Register = () => {
  const [values, setValues] = useState(initialState);
  const [error, setError] = useState(null);

  function onChange(event) {
    const { value, name } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  }

  function onSubmit(event) {
    event.preventDefault();

    axios.post("http://localhost:3333/register", values).then((resp) => {});

    setValues(initialState);
    window.alert("Success");
  }

  return (
    <div>
      <LoginBar />
      <div className="user-login">
        <h1 className="user-login__title">Registrar</h1>
        <form onSubmit={onSubmit}>
          <div className="user-login__form-control">
            <label htmlFor="user">Usuário</label>
            <input
              id="user"
              type="text"
              name="userName"
              onChange={onChange}
              value={values.userName}
            />
          </div>
          <div className="user-login__form-control">
            <label htmlFor="password">Senha</label>
            <input
              id="password"
              type="password"
              name="password"
              onChange={onChange}
              value={values.password}
            />
          </div>
          <UIButton
            type="submit"
            theme="contained-green"
            className="user-login__submit-button"
            rounded
          >
            Registrar
          </UIButton>
        </form>
      </div>
    </div>
  );
};
