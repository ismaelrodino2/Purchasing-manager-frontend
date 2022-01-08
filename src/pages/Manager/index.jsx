import axios from "axios";
import { ModalLoading } from "components/ModalLoading";
import { ProductsContext } from "context/ProductsContext";
import { TokenContext } from "context/TokenContext";
import { UsersContext } from "context/UsersContext";
import React, { useContext, useState } from "react";
import * as Styled from "./styles";

const Manager = () => {
  const { allProducts } = useContext(ProductsContext);
  const { allUsers } = useContext(UsersContext);
  const [loading, setLoading] = useState(false);
  const { token } = useContext(TokenContext);

  const onSubmit = (e) => {
    e.preventDefault();
    const article = {
      qnt: e.target.number.value,
      product_id: selectProduct,
      user_id: selectUser,
    };
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.post(
          "http://localhost:3333/makerelation",
          article,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        console.log(response);
        window.alert("relação criada com sucesso");
        document.getElementById("form").reset();
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };

    fetchData();
  };
  const [selectProduct, setSelectProduct] = useState();
  const [selectUser, setSelectUser] = useState();

  return (
    <Styled.Container>
      {loading && <ModalLoading />}
      <form onSubmit={onSubmit} id="form">
        <h1>escolha o produto</h1>
        <select
          value={selectProduct}
          onChange={(e) => setSelectProduct(e.target.value)}
        >
          {allProducts.map((el) => (
            <option value={el.id}>{el.name}</option>
          ))}
        </select>
        <p>unidades</p>
        <input type="number" name="number" />
        <h1>escolha o usuário</h1>
        <select onChange={(e) => setSelectUser(e.target.value)}>
          {allUsers.map((el) => (
            <option value={el.id}>{el.name}</option>
          ))}
        </select>
        <button>Atrelar ao Usuário</button>
      </form>
    </Styled.Container>
  );
};

export default Manager;
