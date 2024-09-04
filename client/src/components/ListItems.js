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
    <ListItem disablePadding>
      <ListItemButton component={Link} to={"/"}>
        <ListItemIcon>
          <Home />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
    </ListItem>
  </div>
);

export const SecondaryListItems = (
  <div>
    <ListItem disablePadding>
      <ListItemButton component={Link} to={"/profile"}>
        <ListItemIcon>
          <Person />
        </ListItemIcon>
        <ListItemText primary="Profile" />
      </ListItemButton>
    </ListItem>
  </div>
);
