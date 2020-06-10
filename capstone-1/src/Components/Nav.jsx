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
  FormControl,
} from "@material-ui/core";

// Icon import
import HomeIcon from "@material-ui/icons/Home";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SearchIcon from "@material-ui/icons/Search";
import ClearIcon from "@material-ui/icons/Clear";
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
        console.log(testArray);
        setSearchArray(testArray);
        // Search by manufacturer
      } else if (make.search(searchInputLowerCase) !== -1) {
        testArray.push(product);
        console.log(testArray);
        setSearchArray(testArray);
        // no match handling
      } else console.log("no match");
    });
  };

  // adding item to {cartItems} array
  const handleOnClick = (data, quantity) => {
    let tempItemArray = [];
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

  const handleClearInput = () => {
    setSearchBool(false);
    setSearchInput("");
  };
  const ClearButtonRender = () => {
    if (searchBool) {
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
              searchArray={searchArray}
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
