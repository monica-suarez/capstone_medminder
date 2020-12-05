import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Paper } from "@material-ui/core";
import Header from "../Header";
import Dosage from "./Dosage";
import "./medlist.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      width: "38ch",
    },
    textField: {
      width: "25ch",
    },
  },
  formControl: {
    minWidth: "30ch",
  },
}));

const MedListForm = () => {
  const classes = useStyles();
  const API_KEY = process.env.REACT_APP_API_KEY;
  // const url =
  //   "https://api.fda.gov/drug/event.json?api_key=API_KEY&search=openfda.brand_name:";
  console.log(typeof API_KEY);
  // const [medications, setMedications] = useState([]);
  // const [search, setSearch] = useState("");
  // const [alertTime, setAlertTime] = useState("");
  const [addDose, setAddDose] = useState(false);
  const [removeDose, setRemoveDose] = useState(true);
  // useEffect(() => {
  //   fetch(
  //     "https://clinicaltables.nlm.nih.gov/api/rxterms/v3/search?ef=DISPLAY_NAME"
  //     // "https://clinicaltables.nlm.nih.gov/api/rxterms/v3/search?terms=amb&ef=DISPLAY_NAME"
  //   )
  //     .then((response) => response.json)
  //     .then((data) => {
  //       setMedications(data.results);
  //     });
  // });
  // const handleUpdate = (e) => {
  //   if (e.target.name === "search") {
  //     setSearch(e.target.value);
  //   }
  //   if (e.target.name === "alertTime") {
  //     setAlertTime(e.target.value);
  //   }
  // };
  return (
    <div>
      <header className="page-header">
        <div>Medications</div>
      </header>
      <Header />
      <h1 className="alert-title">Add Your Medication Alerts:</h1>
      <Box
        className={classes.root}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Paper elevation={5} className="med-form">
          <form>
            <input
              // value={search}
              placeholder="Search Medications"
              name="search"
              // onChange={handleUpdate}
            />
            <Dosage
              name="alertTime"
              addDose={addDose}
              handleAddDose={setAddDose}
              removeDose={removeDose}
              handleRemoveDose={setRemoveDose}
            />
            <div>
              {addDose === true ? (
                <Dosage
                  addDose={addDose}
                  handleAddDose={setAddDose}
                  removeDose={removeDose}
                  handleRemoveDose={setRemoveDose}
                />
              ) : null}
            </div>
            <div>
              {removeDose === false ? (
                <Dosage
                  addDose={addDose}
                  handleAddDose={setAddDose}
                  removeDose={removeDose}
                  handleRemoveDose={setRemoveDose}
                />
              ) : null}
            </div>
            {/* <FormControl className={classes.formControl}>
                <InputLabel htmlFor="dosePerDay">Times Taken Per Day</InputLabel>
                <Select
                  native
                  className="dose-select"
                  value={state.dosePerDay}
                  onChange={handleChange}
                  label="Times"
                  inputProps={{
                    name: "dosePerDay",
                    id: "dosage",
                  }}
                >
                  <option aria-label="None" value="" />
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                  <option value={6}>6</option>
                </Select>
              </FormControl> */}
          </form>
        </Paper>
      </Box>
    </div>
  );
};

export default MedListForm;
