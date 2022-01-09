import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import UIButton from "components/UI/Button/Button";

import "./Login.css";
import axios from "axios";
import { ModalLoading } from "components/ModalLoading";
import { TokenContext } from "context/TokenContext";
import { Button } from "components/Button";

function initialState() {
  return { userName: "", password: "" };
}

const UserLogin = () => {
  const [loading, setLoading] = useState();
  const [values, setValues] = useState(initialState);
  const [error, setError] = useState(null);
  const { setToken } = useContext(TokenContext);
  const history = useHistory();

  function onChange(event) {
    const { value, name } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  }

  function onSubmit(event) {
    setLoading(true);
    axios.post("http://localhost:3333/login", values).then((resp) => {
      const { data } = resp;
      console.log(data);
      const { token } = data;
      if (token) {
        localStorage.setItem("token", token);
        setToken(token);
        return history.push("/");
      }
      setLoading(false);
    });

    event.preventDefault();

    // setError(error);
    setValues(initialState);
  }

  return (
    <div className="user-login">
      {loading && <ModalLoading />}
      <h1 className="user-login__title">Login</h1>
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
        {error && <div className="user-login__error">{error}</div>}
        <Button
          type="submit"
          theme="contained-green"
          className="user-login__submit-button"
          rounded
        >
          Entrar
        </Button>
      </form>
    </div>
  );
};

export default UserLogin;
