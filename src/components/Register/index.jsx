import axios from 'axios';
import { Button } from 'components/Button';
import { Heading } from 'components/Heading';
import { FormControl } from 'components/FormControl';

import { LoginBar } from 'components/LoginBar';
import { ModalLoading } from 'components/ModalLoading';
import React, { useState } from 'react';
import * as Styled from './styles';

function initialState() {
  return { userName: '', password: '' };
}

export const Register = () => {
  const [loading, setLoading] = useState(false);

  const [values, setValues] = useState(initialState);

  function onChange(event) {
    const { value, name } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  }

  function onSubmit(event) {
    setLoading(true);
    event.preventDefault();

    axios.post(`${process.env.REACT_APP_API_URL}/register`, values).then((resp) => {
      window.alert('Success');
    });

    setValues(initialState);
    setLoading(false);
  }

  return (
    <>
      <LoginBar />
      <Styled.Container>
        {loading && <ModalLoading />}
        <Styled.Center>
          <Heading>Registrar-se</Heading>
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
            <Button type="submit" rounded>
              Registrar
            </Button>
          </form>
        </Styled.Center>
      </Styled.Container>
    </>
  );
};
