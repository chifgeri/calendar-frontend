import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import Routes from "./Routes";

const theme = createMuiTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
