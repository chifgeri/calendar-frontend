import React from "react";
import { Switch } from "react-router";
import ProtectedRoute from "./components/ProtectedRoute";
import Page from "./pages/Page";

interface Props {}

const Routes = (props: Props) => {
  return (
    <Switch>
      <ProtectedRoute path="/login">
        <Page>Login</Page>
      </ProtectedRoute>

      <ProtectedRoute guard path="/">
        <Page>Asdasd</Page>
      </ProtectedRoute>
    </Switch>
  );
};

export default Routes;
