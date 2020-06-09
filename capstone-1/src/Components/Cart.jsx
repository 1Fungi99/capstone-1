import React from "react";
import {
  Container,
  Typography,
  Card,
  Grid,
  makeStyles,
  CardActions,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  img: { width: 125, float: "left" },
  card: {
    width: 850,
    padding: 15,
    marginBottom: 2,
    marginLeft: "auto",
    marginRight: "auto",
  },
  itemText: { marginLeft: 150 },
  checkoutText: { marginRight: 15 },
  checkoutButton: { float: "right" },
  totalDiv: { float: "right", textAlign: "right", marginTop: 10 },
  cardContainer: { padding: 15, marginBottom: 30 },
  container: { marginBottom: 50 },
}));

const Cart = (props) => {
  const classes = useStyles();
  const items = props.cartItems;
  let total = 0;
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  let itemPriceArray = [];

  if (items.length !== 0) {
    items.forEach((item) => {
      itemPriceArray.push(item.price);
    });
    total = itemPriceArray.reduce(reducer);
  }

  return (
    <Container maxWidth="md" className={classes.container}>
      <Typography variant="h3" gutterBottom>
        Your Cart
      </Typography>
      <Card className="cardContainer">
        {items.length === 0 ? (
          <Typography variant="h5" gutterBottom>
            Try adding something to cart
          </Typography>
        ) : (
          items.map((cur, index) => (
            <>
              <Grid key={cur.index} item md>
                <Card className={classes.card}>
                  <img src={cur.img} alt="oops" className={classes.img} />
                  <Typography variant="body1" className={classes.itemText}>
                    {cur.name}
                  </Typography>
                  <Typography variant="h6" className={classes.itemText}>
                    ${cur.price}
                  </Typography>
                  <Typography variant="body2" className={classes.itemText}>
                    Make: {cur.manufacturer}
                  </Typography>
                  <Typography variant="body2" className={classes.itemText}>
                    SKU: {cur.id}
                  </Typography>
                </Card>
              </Grid>
            </>
          ))
        )}
        {items.length === 0 ? (
          console.log("Cart is empty")
        ) : (
          <div className={classes.totalDiv}>
            <Typography variant="body1" className={classes.checkoutText}>
              Sub-total: $ {total.toFixed(2)}
            </Typography>
            <Typography variant="body1" className={classes.checkoutText}>
              Tax: $ {(total * 0.0825).toFixed(2)}
            </Typography>
            <Typography variant="body1" className={classes.checkoutText}>
              Total: $ {(total * 1.0825).toFixed(2)}
            </Typography>
            <CardActions className={classes.checkoutButton}>
              <Button onClick={() => props.handleClearCartOnClick()}>
                Clear Cart
              </Button>
              <Button>Checkout</Button>
            </CardActions>
          </div>
        )}
      </Card>
    </Container>
  );
};
export default Cart;
