import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StoreProvider from "components/Store/Provider";
import RoutesPrivate from "components/Routes/Private/Private";
import Login from "./Login/Login";
import { Register } from "components/Register";
import { LoginBar } from "components/LoginBar";
import { HomeBar } from "components/HomeBar";
import { LogoutBar } from "components/LogoutBar";
import CreateUser from "./CreateUser";
import CreateProduct from "./CreateProduct";
import Users from "./Users";
import Products from "./Products";
import Manager from "./Manager";
import { ProductsContextProvider } from "context/ProductsContext";

const PagesRoot = () => {
  return (
    <StoreProvider>
      <ProductsContextProvider>
        <Router>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <div>
              <HomeBar />
              <RoutesPrivate exact path="/" component={Users} />
              <RoutesPrivate exact path="/create-user" component={CreateUser} />
              <RoutesPrivate exact path="/products" component={Products} />
              <RoutesPrivate
                exact
                path="/create-product"
                component={CreateProduct}
              />
              <RoutesPrivate exact path="/manager" component={Manager} />
              <LogoutBar />
            </div>
          </Switch>
        </Router>
      </ProductsContextProvider>
    </StoreProvider>
  );
};

export default PagesRoot;
