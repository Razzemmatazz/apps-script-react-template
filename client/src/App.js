import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages";
import { Header, Drawer, Footer } from "./components";
import { Profile } from "./pages/Profile";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
    display: "flex",
    flexFlow: "column nowrap",
  },
  pageContent: {
    flex: 1,
  },
}));

function App() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  return (
    <BrowserRouter>
      <div className={classes.root}>
        <Header {...{ open, setOpen }} />
        <Drawer {...{ open, setOpen }} />
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <div className={classes.pageContent}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </div>
          <Footer />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
