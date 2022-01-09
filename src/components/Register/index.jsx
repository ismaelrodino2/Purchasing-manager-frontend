import axios from 'axios';
import { Button } from 'components/Button';
import { Heading } from 'components/Heading';
import { FormControl } from 'components/FormControl';

import { LoginBar } from 'components/LoginBar';
import { ModalLoading } from 'components/ModalLoading';
import UIButton from 'components/UI/Button/Button';
import React, { useState } from 'react';
import * as Styled from './styles';

function initialState() {
  return { userName: '', password: '' };
}

export const Register = () => {
  const [loading, setLoading] = useState(false);

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
    setLoading(true);
    event.preventDefault();

    axios.post('http://localhost:3333/register', values).then((resp) => {
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
            {error && <Styled.Error>{error}</Styled.Error>}
            <Button type="submit" theme="contained-green" rounded>
              Registrar
            </Button>
          </form>
        </Styled.Center>
      </Styled.Container>
    </>
  );
};
