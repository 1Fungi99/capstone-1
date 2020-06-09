import React from "react";

// Material UI
import { Container, Typography, Grid } from "@material-ui/core";

// Products list
import Products from "../Assets/Products";

import ItemGridView from "./itemGridView";

// const useStyles = makeStyles((theme) => ({
//   card: { maxWidth: 275 },
// }));

const Home = (props) => {
  //   const classes = useStyles();

  return (
    <>
      <Container maxWidth="lg">
        <Typography variant="h3" gutterBottom>
          Home
        </Typography>
        <Grid>
          {Products.map((cur, index) => (
            <ItemGridView
              cur={cur}
              handleOnClick={props.handleOnClick}
              key={index}
            />
          ))}
        </Grid>
      </Container>
    </>
  );
};
export default Home;
