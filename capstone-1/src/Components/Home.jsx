import React from "react";

// Material UI
import { Container, Typography, Grid, Button } from "@material-ui/core";

// Products list
import Products from "../Assets/Products";

// Import component
import ItemGridView from "./itemGridView";

const Home = (props) => {
  const searchArray = props.searchArray;
  return (
    <>
      <Container maxWidth="lg">
        <Typography variant="h3" gutterBottom>
          Home
        </Typography>
        <Grid>
          {props.searchBool === true
            ? searchArray.map((cur, index) => (
                <ItemGridView
                  cur={cur}
                  handleOnClick={props.handleOnClick}
                  handleSelectOnChange={props.handleSelectOnChange}
                  key={index}
                />
              ))
            : Products.map((cur, index) => (
                <ItemGridView
                  cur={cur}
                  handleOnClick={props.handleOnClick}
                  handleSelectOnChange={props.handleSelectOnChange}
                  key={index}
                />
              ))}
        </Grid>
      </Container>
    </>
  );
};
export default Home;
