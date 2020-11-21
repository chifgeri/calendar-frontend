import React from "react";
import { Route, Switch } from "react-router";
import Page from "./pages/Page";

interface Props {}

const Routes = (props: Props) => {
  return (
    <Switch>
      <Route path="/">
        <Page>Asdasd</Page>
      </Route>
    </Switch>
  );
};

export default Routes;
