import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Box } from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import "./medlist.css";

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
    backgroundColor: "red",
  },
  addIcon: {
    paddingLeft: 20,
    cursor: "pointer",
    transition: "fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;",
  },
}));

const Dosage = (props) => {
  const classes = useStyles();
  const handleAdd = (e) => {
    e.preventDefault();
    props.handleAddDose(!props.addDose);
  };
  const handleRemove = (e) => {
    e.preventDefault();
    props.handleRemoveDose(!props.removeDose);
  };
  return (
    <div className={classes.alertBody}>
      <label className={classes.alertLabel} htmlFor="doseTime">
        Alert Time:
      </label>
      <div name="doseTime" className={classes.doseTimes} elevation={3}>
        <div
          className={classes.container}
          display="flex"
          flex-direction="row"
          justifycontent="space-between"
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
            <AddCircleIcon
              className={classes.addIcon}
              id="add-alert"
              color="secondary"
              alt="add alert time"
              name="addDose"
              onClick={handleAdd}
            />
            <RemoveCircleIcon
              className={classes.addIcon}
              id="remove-alert"
              alt="remove alert time"
              onClick={handleRemove}
            />
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Dosage;
