import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Home, Person, SupervisorAccount } from '@material-ui/icons';

export const MainListItems = (
  <div>
    <Link to='/'>
      <ListItem button>
        <ListItemIcon>
          <Home />
        </ListItemIcon>
        <ListItemText primary='Dashboard' />
      </ListItem>
    </Link>
  </div>
);

export const SecondaryListItems = (
  <div>
    <Link to='/profile'>
      <ListItem button>
        <ListItemIcon>
          <Person />
        </ListItemIcon>
        <ListItemText primary='Profile' />
      </ListItem>
    </Link>
    <Link to='/signin'>
      <ListItem button>
        <ListItemIcon>
          <SupervisorAccount />
        </ListItemIcon>
        <ListItemText primary='Admin Login' />
      </ListItem>
    </Link>
  </div>
);
