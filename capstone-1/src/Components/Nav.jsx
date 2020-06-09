import React, { useState } from "react";

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
import Products from "../Assets/Products";

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

  // State declaration
  const [cartQuantity, setCartQuantity] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [searchArray, setSearchArray] = useState("");
  const [searchBool, setSearchBool] = useState(false);

  let tempItemArray = [];

  // handles the on change for the submit
  const handleSubmitOnChange = (str) => {
    setSearchInput(str);
  };

  // search functionality
  const handleSearchSubmit = () => {
    setSearchArray([]);
    setSearchBool(true);
    Products.forEach((product) => {
      const searchInputLowerCase = searchInput.toLowerCase();
      const name = product.name.toLowerCase();
      if (name.search(searchInputLowerCase) !== -1) {
        setSearchArray(searchArray.concat(product));
        console.log("sku: " + product.id + " was added ");
      }
    });
  };

  // adding item to {cartItems} array
  const handleOnClick = (data, quantity) => {
    tempItemArray = [];
    setCartQuantity(cartQuantity + parseInt(quantity));
    for (let i = 0; i < parseInt(quantity); i++) {
      tempItemArray.push(data);
    }
    setCartItems(cartItems.concat(tempItemArray));
  };

  // takes in input from the select input
  const handleSelectOnChange = (data) => {
    console.log(data);
  };

  // mass delete function
  const handleClearCartOnClick = () => {
    setCartItems([]);
    console.log("Cart was cleared");
  };

  return (
    // react router
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
                  onChange={(e) => handleSubmitOnChange(e.target.value)}
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
                  <StyledBadge
                    badgeContent={cartItems.length}
                    color="secondary"
                  >
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
            <Home
              searchBool={searchBool}
              handleSelectOnChange={handleSelectOnChange}
              handleOnClick={handleOnClick}
            />
          </Route>
          <Route exact path="/cart">
            <Cart
              cartItems={cartItems}
              handleClearCartOnClick={handleClearCartOnClick}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Nav;
