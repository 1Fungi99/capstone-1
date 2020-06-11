import React from "react";

// Material UI
import {
  Typography,
  Grid,
  makeStyles,
  Card,
  CardContent,
  CardActions,
  Button,
  NativeSelect,
} from "@material-ui/core";

import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

const useStyles = makeStyles((theme) => ({
  card: { marginBottom: 20, flexDirection: "row" },
  img: { width: 300, float: "left", padding: 15 },
  item_text: { marginLeft: 310, width: 800 },
}));

const ItemGridView = (props) => {
  const classes = useStyles();

  const currentItem = props.cur;
  let itemQuantity = 1;

  const handleSelectOnChange = (selectQuantity) => {
    itemQuantity = selectQuantity;
  };

  let optionArray = [];
  for (let i = 0; i <= props.cur.quantity; i++) {
    optionArray.push(i);
  }
  // const OptionRender = () => {

  // };
  return (
    <>
      <Grid item md>
        <Card className={classes.card}>
          <img src={props.cur.img} alt="oops" className={classes.img} />
          <CardContent>
            <Typography variant="body1" className={classes.item_text}>
              {props.cur.name}
            </Typography>
            <Typography variant="h6">${props.cur.price}</Typography>
            <Typography variant="body2" className={classes.item_text}>
              Make: {props.cur.manufacturer}
            </Typography>
            <Typography variant="body2" className={classes.item_text}>
              SKU: {props.cur.id}
            </Typography>
            <Typography variant="body2" className={classes.item_text}>
              In Stock: {props.cur.quantity}
            </Typography>
            {props.cur.price > 450 ? (
              <Typography variant="body2" className={classes.item_text}>
                Limit (1) per customer.
              </Typography>
            ) : (
              <></>
            )}

            <CardActions>
              {props.cur.price > 450 ? (
                <></>
              ) : (
                <NativeSelect
                  defaultValue="1"
                  onChange={(e) => handleSelectOnChange(e.target.value)}
                >
                  {optionArray.map((cur) => (
                    <option key={cur} value={cur}>
                      {cur}
                    </option>
                  ))}
                </NativeSelect>
              )}
              <Button
                onClick={() => props.handleOnClick(currentItem, itemQuantity)}
              >
                <AddShoppingCartIcon />
              </Button>
            </CardActions>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};

export default ItemGridView;
