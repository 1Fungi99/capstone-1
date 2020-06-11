import React from "react";

// Material UI imports
import {
  Container,
  Typography,
  Card,
  Grid,
  makeStyles,
  CardActions,
  Button,
} from "@material-ui/core";

// Force Update
import useForceUpdate from "use-force-update";

const useStyles = makeStyles((theme) => ({
  img: { width: 125, float: "left" },
  card: {
    width: 850,
    padding: 15,
    marginBottom: 2,
    marginLeft: "auto",
    marginRight: "auto",
    position: "relative",
  },
  itemText: { marginLeft: 150, width: 550 },
  checkoutText: { marginRight: 15 },
  checkoutButton: { float: "right" },
  totalDiv: { float: "right", textAlign: "right", marginTop: 10 },
  cardContainer: { padding: 15, marginBottom: 30 },
  container: { marginBottom: 50 },
  deleteButton: {
    position: "absolute",
    top: 0,
    right: 0,
    marginTop: 15,
    marginRight: 15,
    // top: -135, left: 15, color: "red"
  },
}));

const Cart = (props) => {
  const classes = useStyles();
  const forceUpdate = useForceUpdate();

  const items = props.cartItems;
  let total = 0;
  let itemPriceArray = [];

  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  // if items are present, total is calculated w/o tax
  if (items.length !== 0) {
    items.forEach((item) => {
      itemPriceArray.push(item.price);
    });
    // passing to reducer to sum up entire array
    total = itemPriceArray.reduce(reducer);
  }

  // handle deletion of a single item from the cart
  const handleSingleDelete = (index) => {
    items.splice(index, 1);
    props.setCartItems(items);
    forceUpdate();
    props.update();
  };

  return (
    <Container maxWidth="md" className={classes.container}>
      <Typography variant="h3" gutterBottom>
        Your Cart
      </Typography>
      <Card className={classes.cardContainer}>
        {/* conditional rendering to see if items are present */}
        {items.length === 0 ? (
          // if cart is empty
          <Typography variant="h5" gutterBottom>
            Try adding something to cart
          </Typography>
        ) : (
          // if cart elements are present
          items.map((cur, num) => (
            <Grid key={num} item md>
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
                <CardActions>
                  <Button
                    className={classes.deleteButton}
                    onClick={() => handleSingleDelete(num)}
                  >
                    Delete
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))
        )}
        {/* rendering price if items present */}
        {items.length === 0 ? (
          // if items not present
          <></>
        ) : (
          // if items present
          // simple math to determine taxes and final total
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
