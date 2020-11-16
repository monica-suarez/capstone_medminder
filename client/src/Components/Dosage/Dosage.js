import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, TextField, Box } from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";

const useStyles = makeStyles((theme) => ({
  alertBody: {
    marginTop: 20,
  },
  alertLabel: {
    color: "slate",
  },
  doseTimes: {
    minWidth: 260,
    minHeight: 48,
    marginTop: 10,
  },
  container: {
    display: "inline-flex",
    marginTop: 10,
  },
  formBox: {
    paddingRight: 10,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  input: {
    color: "red",
  },
  addIcon: {
    paddingLeft: "5%",
  },
}));

const Dosage = () => {
  const classes = useStyles();
  return (
    <div className={classes.alertBody}>
      <label className={classes.alertLabel} for="doseTime">
        Alert Time:
      </label>
      <Paper name="doseTime" className={classes.doseTimes} elevation={3}>
        <form
          className={classes.container}
          display="flex"
          flex-direction="row"
          justifyContent="space-between"
          noValidate
        >
          <Box
            className={classes.formBox}
            display="flex"
            flex-direction="row"
            justifyContent="space-between"
          >
            <TextField
              color="secondary"
              id="time"
              type="time"
              defaultValue="07:30"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
                className: classes.input,
              }}
              inputProps={{
                step: 300, // 5 min
              }}
            />
            <AddCircleIcon className={classes.addIcon} color="secondary" />
          </Box>
        </form>
      </Paper>
    </div>
  );
};

export default Dosage;
