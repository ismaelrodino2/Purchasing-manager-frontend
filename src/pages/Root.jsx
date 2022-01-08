import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RoutesPrivate from "components/Routes/Private/Private";
import Login from "./Login/Login";
import { Register } from "components/Register";
import { HomeBar } from "components/HomeBar";
import { LogoutBar } from "components/LogoutBar";
import CreateUser from "./CreateUser";
import CreateProduct from "./CreateProduct";
import Users from "./Users";
import Products from "./Products";
import Manager from "./Manager";
import { ProductsContext, ProductsContextProvider } from "context/ProductsContext";
import { UsersContext, UsersContextProvider } from "context/UsersContext";
import { TokenContextProvider } from "context/TokenContext";
import Relations from "./Relations";


const PagesRoot = () => {
  const { syncUsers } = useContext(UsersContext);
  const { syncProducts } = useContext(ProductsContext);
  syncUsers()
  syncProducts()

  return (
    <TokenContextProvider>
      <ProductsContextProvider>
        <UsersContextProvider>
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
                <RoutesPrivate exact path="/relations" component={Relations} />
                <LogoutBar />
              </div>
            </Switch>
          </Router>
        </UsersContextProvider>
      </ProductsContextProvider>
    </TokenContextProvider>
  );
};

export default PagesRoot;
