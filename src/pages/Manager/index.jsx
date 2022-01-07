import React, { useCallback, useContext, useEffect } from "react";
import StoreContext, { UsersContext } from "components/Store/Context";
import * as Styled from "./styles";
import axios from "axios";
import { useState } from "react";
import { LoadingDots } from "components/Loading";
import StoreProvider from "components/Store/Provider";
import useStorage from "utils/useStorage";
import { ProductsContext } from "context/ProductsContext";

const Manager = () => {
  const { allProducts } = useContext(ProductsContext);
  const { allUsers } = useContext(UsersContext);

  console.log(allProducts);
  console.log(allUsers);

  const onSubmit = useCallback((e) => {
    e.preventDefault();
  });

  return (
    <Styled.Container>
      <form onSubmit={onSubmit} id="form">
        <h1>escolha o produto</h1>
        <select>
          {allProducts.map((allProducts) => (
            <option value={allProducts.id}>{allProducts.name}</option>
          ))}
        </select>
        <p>unidades</p>
        <input type="number" />
        <h1>escolha o usuário</h1>
        <select>
          {allUsers.map((allUsers) => (
            <option value={allUsers.id}>{allUsers.name}</option>
          ))}
        </select>
        <button>Atrelar ao Usuário</button>
      </form>
    </Styled.Container>
  );
};

export default Manager;
