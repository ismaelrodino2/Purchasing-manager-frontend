import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import * as Styled from './styles';
import { Heading } from 'components/Heading';
import axios from 'axios';
import { ModalLoading } from 'components/ModalLoading';
import { TokenContext } from 'context/TokenContext';
import { Button } from 'components/Button';
import { FormControl } from 'components/FormControl';

function initialState() {
  return { userName: '', password: '' };
}

const UserLogin = () => {
  const [loading, setLoading] = useState();
  const [values, setValues] = useState(initialState);
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
    axios.post('http://localhost:3333/login', values).then((resp) => {
      const { data } = resp;
      const { token } = data;
      if (token) {
        localStorage.setItem('token', token);
        setToken(token);
        return history.push('/');
      }
      setLoading(false);
    });

    event.preventDefault();

    setValues(initialState);
  }

  return (
    <Styled.Container>
      {loading && <ModalLoading />}
      <Styled.Center>
          <Heading>Login</Heading>
          <form onSubmit={onSubmit}>
            <FormControl>
              <label htmlFor="user">Usuário</label>
              <input
                id="user"
                type="text"
                name="userName"
                onChange={onChange}
                value={values.userName}
              />
            </FormControl>
            <FormControl>
              <label htmlFor="password">Senha</label>
              <input
                id="password"
                type="password"
                name="password"
                onChange={onChange}
                value={values.password}
              />
            </FormControl>
            <Button type="submit" theme="contained-green" rounded>
              Entrar
            </Button>
          </form>
      </Styled.Center>
    </Styled.Container>
  );
};

export default UserLogin;
