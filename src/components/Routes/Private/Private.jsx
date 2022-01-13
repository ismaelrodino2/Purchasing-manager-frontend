import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { TokenContext } from "context/TokenContext";
import P from 'prop-types';

const RoutesPrivate = ({ component: Component, ...rest }) => {
  const { token } = useContext(TokenContext);

  return (
    <Route
      {...rest}
      render={() =>
        token ? <Component {...rest} /> : <Redirect to="/login" />
      }
    />
  );
};

RoutesPrivate.P = {
    component: P.node,
    rest: P.node
};

export default RoutesPrivate;
