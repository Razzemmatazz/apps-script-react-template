import React, { useState } from 'react';
import { CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Dashboard } from './pages';
import { Header, Drawer, Footer } from './components';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
    display: 'flex',
    flexFlow: 'column nowrap',
  },
  pageContent: {
    flex: 1,
  },
}));

function App() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        <Header {...{ open, setOpen }} />
        <Drawer {...{ open, setOpen }} />
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <div className={classes.pageContent}>
            <Switch>
              <Route path='/'>
                <Dashboard />
              </Route>
            </Switch>
          </div>
          <Footer />
        </main>
      </div>
    </Router>
  );
}

export default App;
