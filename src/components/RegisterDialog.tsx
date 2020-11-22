import {
  Button,
  Dialog,
  DialogContent,
  Grid,
  TextField,
} from "@material-ui/core";
import { useFormik } from "formik";
import React from "react";
import styled from "styled-components";

interface RegisterDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const StyledGrid = styled(Grid)`
  padding: 1.5em;
  padding-bottom: ;
`;

const RegisterDialog: React.FC<RegisterDialogProps> = ({ open, setOpen }) => {
  const formik = useFormik({
    initialValues: {
      userName: "",
      password1: "",
      password2: "",
    },
    onSubmit: (values) => {
      console.log(values);
      setOpen(false);
    },
  });
  return (
    <Dialog open={open} onBackdropClick={() => setOpen(false)}>
      <DialogContent>
        <form onSubmit={formik.handleSubmit}>
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
                id="password1"
                name="password1"
                value={formik.values.password1}
                onChange={formik.handleChange}
                placeholder="Password"
                type="password"
              />
            </Grid>
            <Grid item>
              <TextField
                label="Password again"
                variant="outlined"
                id="password2"
                name="password2"
                value={formik.values.password2}
                onChange={formik.handleChange}
                placeholder="Password again"
                type="password"
              />
            </Grid>
            <Grid item container justify="space-between">
              <Button onClick={() => setOpen(false)}>CANCEL</Button>
              <Button type="submit" variant="outlined">
                Register
              </Button>
            </Grid>
          </StyledGrid>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default RegisterDialog;
