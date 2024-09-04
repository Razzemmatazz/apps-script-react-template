import React from "react";
import { makeStyles } from "@mui/styles";
import { Container, Grid, Paper } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
}));

export const Dashboard = (props) => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg" className={classes.container}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <span>My Page Content Here</span>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
