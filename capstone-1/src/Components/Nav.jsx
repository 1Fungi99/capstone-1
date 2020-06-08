import React from "react";

// React Router Imports
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Material UI imports
import { makeStyles } from "@material-ui/core/styles";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";

// Icon import
import HomeIcon from "@material-ui/icons/Home";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

// Component Imports
import Home from "./Home";
import Cart from "./Cart";

// Logo Import
import Logo from "../Assets/Logo.png";

// Declaring theme
const useStyles = makeStyles((theme) => ({
  drawerPaper: { width: "inherit" },
  link: { textDecoration: "none", color: theme.palette.text.primary },
  img: { height: "67px" },
}));

const Nav = () => {
  const classes = useStyles();
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <Drawer
          style={{ width: "200px" }}
          variant="persistent"
          anchor="left"
          open={true}
          classes={{ paper: classes.drawerPaper }}
        >
          <List>
            <img src={Logo} className={classes.img} />
            <Link to="/" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary={"Home"}></ListItemText>
              </ListItem>
            </Link>
            <Link to="/cart" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <ShoppingCartIcon />
                </ListItemIcon>
                <ListItemText primary={"Your Cart"}></ListItemText>
              </ListItem>
            </Link>
          </List>
        </Drawer>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Nav;
