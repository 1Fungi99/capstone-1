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
import ClearIcon from "@material-ui/icons/Clear";
import Badge from "@material-ui/core/Badge";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";

// Component Imports
import Home from "./Home";
import Cart from "./Cart";
import Admin from "./Admin";

// Logo Import
import Logo from "../Assets/Logo.png";

// Inventory Data
import Products from "../Assets/Products";

import useForceUpdate from "use-force-update";

// Declaring theme
const useStyles = makeStyles((theme) => ({
  drawerPaper: { width: "inherit" },
  link: { textDecoration: "none", color: theme.palette.text.primary },
  img: { height: "67px" },
}));

// Styling for shopping Cart badge
const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))(Badge);

const Nav = () => {
  // calling theme
  const classes = useStyles();

  // State declaration
  const [cartQuantity, setCartQuantity] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [searchArray, setSearchArray] = useState([]);
  const [searchBool, setSearchBool] = useState(false);

  const forceUpdate = useForceUpdate();

  // handles the on change for the submit
  const handleSubmitOnChange = (str) => {
    setSearchInput(str);
  };

  // search functionality
  const handleSearchSubmit = () => {
    let testArray = [];
    const searchInputLowerCase = searchInput.toLowerCase();

    // Setting {searchArray} to []
    setSearchArray(testArray);
    setSearchBool(true);
    Products.forEach((product) => {
      const name = product.name.toLowerCase();
      const SKU = product.id;
      const make = product.manufacturer.toLowerCase();

      // Search by name
      if (name.search(searchInputLowerCase) !== -1) {
        testArray.push(product);
        setSearchArray(testArray);
        // search by SKU
      } else if (SKU.toString().search(searchInputLowerCase) !== -1) {
        testArray.push(product);
        setSearchArray(testArray);
        // Search by manufacturer
      } else if (make.search(searchInputLowerCase) !== -1) {
        testArray.push(product);
        setSearchArray(testArray);
        // no match handling
      } else console.log("no match");
    });
  };

  // adding item to {cartItems} array
  const handleOnClick = (data, quantity) => {
    let tempItemArray = [];

    // array to check if customer is buying more than limited item
    let moreThanOneArray = [];
    cartItems.forEach((product) => {
      moreThanOneArray.push(product.id);
    });

    let quantityReserved = cartItems.filter((product) => product.id === data.id)
      .length;

    if (
      (moreThanOneArray.includes(6302019) && data.id === 6302019) ||
      (moreThanOneArray.includes(6356274) && data.id === 6356274) ||
      (moreThanOneArray.includes(6290652) && data.id === 6290652) ||
      (moreThanOneArray.includes(6373489) && data.id === 6373489) ||
      quantityReserved === data.quantity
    ) {
      if (
        (moreThanOneArray.includes(6302019) && data.id === 6302019) ||
        (moreThanOneArray.includes(6356274) && data.id === 6356274) ||
        (moreThanOneArray.includes(6290652) && data.id === 6290652) ||
        (moreThanOneArray.includes(6373489) && data.id === 6373489)
      ) {
        alert(
          `Max limit of SKU: ${data.id} reached \nReason: Limit (1) per customer.`
        );
      } else {
        alert(
          `Max limit of SKU: ${data.id} reached \nReason: Max quantity of ${data.quantity} reached.`
        );
      }
    } else {
      setCartQuantity(cartQuantity + parseInt(quantity));
      for (let i = 0; i < parseInt(quantity); i++) {
        tempItemArray.push(data);
      }
      setCartItems(cartItems.concat(tempItemArray));
    }
  };

  // takes in input from the select input
  const handleSelectOnChange = (data) => {
    console.log(data);
  };

  // mass delete function
  const handleClearCartOnClick = () => {
    setCartItems([]);
  };

  const handleClearInput = () => {
    setSearchBool(false);
    setSearchInput("");
  };

  const ClearButtonRender = () => {
    if (searchBool || searchInput !== "") {
      return (
        <>
          <ListItem button onClick={() => handleClearInput()}>
            <ListItemIcon>
              <ClearIcon />
            </ListItemIcon>
            <ListItemText primary={"Clear Search"} />
          </ListItem>
        </>
      );
    } else return <></>;
  };
  const update = () => {
    forceUpdate();
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
                <IconButton type="submit" onClick={() => handleSearchSubmit()}>
                  <SearchIcon />
                </IconButton>
              </ListItemIcon>
              <ListItemText>
                <InputBase
                  value={searchInput}
                  placeholder="Search..."
                  onChange={(e) => handleSubmitOnChange(e.target.value)}
                  onKeyPress={(e) => console.log(e.target.value)}
                />
              </ListItemText>
            </ListItem>
            <ClearButtonRender />
            <hr />
            {/* Back to home */}
            <Link to="/" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary={"Home"} />
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
                <ListItemText primary={"Your Cart"} />
              </ListItem>
            </Link>
            <Link to="/admin" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <SupervisorAccountIcon />
                </ListItemIcon>
                <ListItemText primary={"Admin"} />
              </ListItem>
            </Link>
            <hr />
          </List>
        </Drawer>

        <Switch>
          <Route exact path="/">
            <Home
              searchBool={searchBool}
              searchArray={searchArray}
              handleSelectOnChange={handleSelectOnChange}
              handleOnClick={handleOnClick}
            />
          </Route>
          <Route exact path="/cart">
            <Cart
              update={update}
              cartItems={cartItems}
              setCartItems={setCartItems}
              handleClearCartOnClick={handleClearCartOnClick}
            />
          </Route>
          <Route exact path="/admin">
            <Admin />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Nav;
