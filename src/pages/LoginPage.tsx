import { Grid } from "@material-ui/core";
import React from "react";
import LoginForm from "../components/LoginForm";
import Page from "./Page";

interface Props {}

const LoginPage = (props: Props) => {
  return (
    <Page title="Login to see the calendars">
      <Grid container justify="center" direction="column" alignItems="center">
        <LoginForm />
        <Grid item>Register</Grid>
        {/* <RegisterForm modal /> */}
      </Grid>
    </Page>
  );
};

export default LoginPage;
