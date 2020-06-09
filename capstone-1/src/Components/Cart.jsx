import React from "react";
import { Container, Typography } from "@material-ui/core";

// import Products from "../Assets/Products";

const Cart = (props) => {
  const items = props.cartItems;

  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Cart
      </Typography>
      {items.length === 0 ? (
        <Typography variant="h3" gutterBottom>
          Your Cart Is Empty
        </Typography>
      ) : (
        items.map((cur, index) => (
          <Typography variant="body1" gutterBottom>
            SKU: {cur}
          </Typography>
        ))
      )}
    </Container>
  );
};
export default Cart;
