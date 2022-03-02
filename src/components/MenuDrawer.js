import { makeStyles } from "@material-ui/core";
import React from "react";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Icon from "@material-ui/core/Icon";
import Typography from "@material-ui/core/Typography";
import menu from "../utils/menu";

const useStyles = makeStyles((theme) => ({
  extendHeight: {
    display: "flex",
    minHeight: 64,
    justifyContent: "center",
    alignItems: "center",
  },
  sideLogo: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));

export default function Sidebar() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.extendHeight}>
        <div className={classes.sideLogo}>
          <Typography variant="h6" noWrap>
            EHR HUB
          </Typography>
        </div>
      </div>
      <Divider />
      <List>
        {menu.map(({ label, path, icon }) => (
          <ListItem button key={label}>
            <ListItemIcon>
              <Icon>{icon}</Icon>
            </ListItemIcon>
            <ListItemText primary={label} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );
}
