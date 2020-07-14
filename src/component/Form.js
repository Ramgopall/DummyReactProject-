import React from "react";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  container: {
    display: "flex",
    flexDirection: "column",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    flex: "1 0 auto",
    margin: theme.spacing(1),
  },
  margin: {
    margin: 8,
  },
}));

const Form = ({ value, setValue, handleSubmit }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <form className={classes.root} onSubmit={handleSubmit}>
        <Box display="flex" flexDirection="column">
          <Typography className={classes.margin}>Message:</Typography>
          <TextField
            className={classes.margin}
            id="outlined-basic"
            variant="outlined"
            label="You underestimate my power ..."
            value={value}
            onChange={(e) => setValue(e.currentTarget.value)}
          />
          <Button
            className={classes.margin}
            variant="contained"
            onClick={(e) => handleSubmit(e)}
          >
            Try Spinning, that's a good trick!
          </Button>
        </Box>
      </form>
    </Paper>
  );
};

export default Form;
