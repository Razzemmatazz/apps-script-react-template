import React from "react";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Home, Person, SupervisorAccount } from "@mui/icons-material";

export const MainListItems = (
  <div>
    <Link to="/">
      <ListItem>
        <ListItemButton>
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
      </ListItem>
    </Link>
  </div>
);

export const SecondaryListItems = (
  <div>
    <Link to="/profile">
      <ListItem>
        <ListItemButton>
          <ListItemIcon>
            <Person />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItemButton>
      </ListItem>
    </Link>
    <Link to="/signin">
      <ListItem>
        <ListItemButton>
          <ListItemIcon>
            <SupervisorAccount />
          </ListItemIcon>
          <ListItemText primary="Admin Login" />
        </ListItemButton>
      </ListItem>
    </Link>
  </div>
);
