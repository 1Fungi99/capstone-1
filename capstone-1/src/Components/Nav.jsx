import React, { useState, useEffect } from "react";

// React Router Imports
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Material UI imports
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  InputBase,
  IconButton,
} from "@material-ui/core";

// Icon import
import HomeIcon from "@material-ui/icons/Home";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SearchIcon from "@material-ui/icons/Search";
import Badge from "@material-ui/core/Badge";

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

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))(Badge);

const Nav = () => {
  const classes = useStyles();

  const [cartQuantity, setCartQuantity] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    console.log("useEffect Log: ");
    console.log(searchInput);
  });

  const handleOnChange = (str) => {
    setSearchInput(str);
  };

  const handleOnClick = (data) => {
    console.log(data);
    setCartQuantity(cartQuantity + 1);
    setCartItems(cartItems.concat(data));
    console.log(cartItems);
  };

  const handleSearchSubmit = () => {
    console.log("Search Submitted");
  };

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
            <img src={Logo} className={classes.img} alt="COMPU Logo" />
            {/* Search Items */}
            <ListItem>
              <ListItemIcon>
                <IconButton onClick={() => handleSearchSubmit()}>
                  <SearchIcon />
                </IconButton>
              </ListItemIcon>
              <ListItemText>
                <InputBase
                  placeholder="Search..."
                  onChange={(e) => handleOnChange(e.target.value)}
                />
              </ListItemText>
            </ListItem>
            {/* Back to home */}
            <Link to="/" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary={"Home"}></ListItemText>
              </ListItem>
            </Link>
            {/* Check items in cart */}
            <Link to="/cart" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <StyledBadge badgeContent={cartQuantity} color="secondary">
                    <ShoppingCartIcon />
                  </StyledBadge>
                </ListItemIcon>
                <ListItemText primary={"Your Cart"}></ListItemText>
              </ListItem>
            </Link>
          </List>
        </Drawer>

        <Switch>
          <Route exact path="/">
            <Home handleOnClick={handleOnClick} />
          </Route>
          <Route exact path="/cart">
            <Cart cartItems={cartItems} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Nav;
