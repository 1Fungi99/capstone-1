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
  item_text: { marginLeft: 310 },
}));

const ItemGridView = (props) => {
  const classes = useStyles();

  const currentItem = props.cur;
  let itemQuantity = 1;

  const handleSelectOnChange = (selectQuantity) => {
    itemQuantity = selectQuantity;
  };

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
            <CardActions>
              <NativeSelect
                defaultValue="1"
                onChange={(e) => handleSelectOnChange(e.target.value)}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </NativeSelect>
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
