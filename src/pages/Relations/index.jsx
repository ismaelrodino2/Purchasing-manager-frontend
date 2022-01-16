import React, { useCallback, useContext, useEffect, useState } from 'react';
import { TokenContext } from 'context/TokenContext';
import * as Styled from './styles';
import axios from 'axios';
import { ModalLoading } from 'components/ModalLoading';
import { Container } from 'components/Container/styles';
import { Button } from 'components/Button';

const Relations = () => {
  const [loading, setLoading] = useState();
  const { token } = useContext(TokenContext);
  const [relations, setRelations] = useState();

  const getData = useCallback(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(
            `${process.env.REACT_APP_API_URL}/makerelation`,
          {
            headers: { Authorization: `Bearer ${token}` },
          },
        );
        setRelations(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };

    fetchData();
  }, [token]);

  useEffect(() => {
    getData();
  }, [getData]);

  async function teste(product_id, user_id, qnt) {
    setLoading(true);
    await axios.delete(`${process.env.REACT_APP_API_URL}/makerelation`, {
      data: {
        user_id: user_id,
        product_id: product_id,
        qnt: qnt,
      },
      headers: { Authorization: `Bearer ${token}` },
    });
    getData();
    setLoading(false);
  }

  return (
    <Container>
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
                  {el.products.map((element) => {
                    return (
                      <>
                        <p>Nome do produto: {element.name}</p>
                        <p>Quantidade: {element.number}</p>
                        <p>Preço total: {element.number * element.price}</p>
                        <Button
                          onClick={() =>
                            teste(element.id, el.id, element.number)
                          }
                        >
                          Excluir
                        </Button>
                      </>
                    );
                  })}
                </p>
              </Styled.Wrapper>
            );
          })}
      </Styled.Grid>
    </Container>
  );
};

export default Relations;
