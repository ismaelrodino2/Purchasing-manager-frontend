import React, { useContext, useEffect, useState } from "react";
import { TokenContext } from "context/TokenContext";
import * as Styled from "./styles";
import axios from "axios";
import { ModalLoading } from "components/ModalLoading";

const Relations = () => {
  const [loading, setLoading] = useState();
  const { token } = useContext(TokenContext);
  const [relations, setRelations] = useState();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(
          "http://localhost:3333/makerelation",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setRelations(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };

    fetchData();
  }, [token]);

  return (
    <Styled.Container>
      {loading && <ModalLoading />}
      <h1>Lista de relações</h1>
      <Styled.Grid>
        {relations &&
          relations.map((el) => {
            return (
              <Styled.Wrapper>
                <p>Nome: {el.name}</p>
                <p>E-mail: {el.email}</p>
                <p>
                  Produto:{" "}
                  {el.products.map((element) => {
                    return (
                      <div>
                        <p>Nome do produto: {element.name}</p>
                        <p>Quantidade: {element.number}</p>
                        <p>Preço total: {element.number * element.price}</p>
                      </div>
                    );
                  })}
                </p>
              </Styled.Wrapper>
            );
          })}
      </Styled.Grid>
    </Styled.Container>
  );
};

export default Relations;
