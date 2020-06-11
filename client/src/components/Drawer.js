import React from 'react';
import clsx from 'clsx';
import { Drawer, Divider, List, IconButton } from '@material-ui/core';
import { ChevronLeft } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { MainListItems, SecondaryListItems } from './ListItems';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
}));

export const DrawerElement = ({ open, setOpen }) => {
  const classes = useStyles();
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Drawer
      variant='permanent'
      classes={{
        paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
      }}
      open={open}>
      <div className={classes.toolbarIcon}>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeft />
        </IconButton>
      </div>
      <Divider />
      <List>{MainListItems}</List>
      {/* <Divider />
      <List>{SecondaryListItems}</List> */}
    </Drawer>
  );
};
