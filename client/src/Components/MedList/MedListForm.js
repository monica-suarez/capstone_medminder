import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Paper, TextField, CircularProgress } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
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

  const [addDose, setAddDose] = useState(false);
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const loading = open && options.length === 0;
  // const [state, setState] = useState({
  //   dosePerDay: "",
  //   name: "",
  // });

  // const handleChange = (event) => {
  //   const name = event.target.name;
  //   setState({
  //     ...state,
  //     [name]: event.target.value,
  //   });
  // };

  useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      const response = await fetch(
        "https://country.register.gov.uk/records.json?page-size=5000"
      );

      const countries = await response.json();

      if (active) {
        setOptions(Object.keys(countries).map((key) => countries[key].item[0]));
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);
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
            <Autocomplete
              style={{ width: 300 }}
              open={open}
              onOpen={() => {
                setOpen(true);
              }}
              onClose={() => {
                setOpen(false);
              }}
              getOptionSelected={(option, value) => option.name === value.name}
              getOptionLabel={(option) => option.name}
              options={options}
              loading={loading}
              renderInput={(params) => (
                <TextField
                  {...params}
                  className="medSearch"
                  label="Search Medications"
                  InputProps={{
                    ...params.InputProps,
                    endAdornment: (
                      <React.Fragment>
                        {loading ? (
                          <CircularProgress color="inherit" size={20} />
                        ) : null}
                        {params.InputProps.endAdornment}
                      </React.Fragment>
                    ),
                  }}
                />
              )}
            />
            <Dosage addDose={addDose} handleAddDose={setAddDose} />
            <div>{addDose === true ? <Dosage /> : ""}</div>
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
