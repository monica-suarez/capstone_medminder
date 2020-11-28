import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import MedListForm from "./MedListForm";
import "./medlist.css";

const useStyles = makeStyles((theme) => ({
  addMed: {
    marginTop: 20,
    marginBottom: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  addMedLabel: {
    display: "inline-flex",
  },
  addIcon: {
    paddingLeft: 20,
  },
}));

const MedList = () => {
  const classes = useStyles();
  return (
    <div>
      <MedListForm />
      <div className={classes.addMed}>
        <Typography className={classes.addMedLabel}>
          Add/Remove Medication
        </Typography>
        <AddCircleIcon
          className={classes.addIcon}
          color="secondary"
          aria-label="add new medication"
        />
        <RemoveCircleIcon
          className={classes.addIcon}
          aria-label="remove medication above"
        />
      </div>
    </div>
  );
};

export default MedList;
