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
} from "@material-ui/core";

import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

const useStyles = makeStyles((theme) => ({
  card: { marginBottom: 20, flexDirection: "row" },
  img: { width: 300, float: "left", padding: 15 },
  item_text: { width: 500, marginLeft: 310 },
}));

const ItemGridView = (props) => {
  const classes = useStyles();

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
              <Button onClick={() => props.handleOnClick(props.cur.id)}>
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
