import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { TokenContext } from "context/TokenContext";

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

export default RoutesPrivate;
