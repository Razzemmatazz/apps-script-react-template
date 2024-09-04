import React from "react";
import { createRoot } from "react-dom/client";
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./index.css";
import App from "./App";

const theme = createTheme({
  palette: {
    primary: { main: "#0088CC" },
    secondary: {
      main: "#13B823",
    },
  },
});

const root = createRoot(document.getElementById("app"));
root.render(
  <ThemeProvider {...{ theme }}>
    <CssBaseline />
    <App />
  </ThemeProvider>
);
