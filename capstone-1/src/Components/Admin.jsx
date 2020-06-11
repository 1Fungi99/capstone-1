import React, { useState } from "react";
import {
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  signInCard: {
    width: 500,
    height: 300,
    marginLeft: "auto",
    marginRight: "auto",
    msTransform: "translateY(50%)",
    transform: "translateY(50%)",
    padding: 15,
  },
  title: {
    width: 215,
    marginLeft: "auto",
    marginRight: "auto",
  },
  adminInput: {
    color: "#FFFFFF",
    top: 50,
    left: 125,
    width: 215,
  },
  adminButton: {
    backgroundColor: "white",
    top: 100,
    left: 195,
  },
});

const Admin = (props) => {
  const classes = useStyles();
  const [adminInput, setAdminInput] = useState("");
  const [errorToggle, setErrorToggle] = useState(false);
  const password = "3cnjyxwm";

  const handleAdminInputChange = (data) => {
    setAdminInput(data);
  };

  const handleAdminSuccess = () => {
    setErrorToggle(false);
  };

  const handleAdminDenied = () => {
    setErrorToggle(true);
  };

  const handleAdminSubmit = () => {
    password === adminInput ? handleAdminSuccess() : handleAdminDenied();
  };

  return (
    <Card className={classes.signInCard}>
      <CardContent>
        <Typography variant="h4" className={classes.title}>
          Admin Sign In
        </Typography>
        <form>
          {!errorToggle ? (
            <TextField
              autoComplete={"password"}
              type="password"
              className={classes.adminInput}
              label="Credentials"
              variant="outlined"
              onChange={(e) => handleAdminInputChange(e.target.value)}
            ></TextField>
          ) : (
            <TextField
              error
              autoComplete={"password"}
              type="password"
              className={classes.adminInput}
              label="Error"
              defaultValue={adminInput}
              variant="outlined"
              onChange={(e) => handleAdminInputChange(e.target.value)}
              helperText="Incorrect credentials."
            />
          )}
        </form>
        <Button
          className={classes.adminButton}
          onClick={() => handleAdminSubmit()}
        >
          Sign In
        </Button>
      </CardContent>
    </Card>
  );
};

export default Admin;
