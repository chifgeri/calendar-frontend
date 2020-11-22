import { Button, Grid, Paper, TextField } from "@material-ui/core";
import { useFormik } from "formik";
import React from "react";
import styled from "styled-components";

interface Props {}

const StyledGrid = styled(Grid)`
  padding: 1.5em;
  padding-bottom: ;
`;

const LoginForm = (props: Props) => {
  const formik = useFormik({
    initialValues: { userName: "", password: "" },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Paper>
        <StyledGrid
          container
          direction="column"
          spacing={2}
          alignItems="center"
        >
          <Grid item>
            <TextField
              label="Username"
              variant="outlined"
              id="userName"
              name="userName"
              value={formik.values.userName}
              onChange={formik.handleChange}
              placeholder="Username"
            />
          </Grid>
          <Grid item>
            <TextField
              label="Password"
              variant="outlined"
              id="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              placeholder="Password"
              type="password"
            />
          </Grid>
          <Grid item>
            <Button type="submit" variant="outlined">
              Log in
            </Button>
          </Grid>
        </StyledGrid>
      </Paper>
    </form>
  );
};

export default LoginForm;
