import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import { Grid, TextField, Button } from "@mui/material";
import Swal from "sweetalert2";

import { postData } from "./FetchNodeServices";

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  subdiv: {
    background: "#7ed6df",
    padding: 20,
    width: "30%",
    marginTop: 5,
  },
});
const CssTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "1.5px solid #FFF",
      borderRadius: 0,
    },
    "&:hover fieldset": {
      borderColor: "#FFF",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#FFF",
    },
  },
});

function Courses(props) {
  const classes = useStyles();
  const [language, setLanguage] = useState("");
  const [region, setRegion] = useState("");

  const handleSubmit = async () => {
    var formData = new FormData();
    formData.append("language", language);
    formData.append("region", region);
    console.log(language);
    var result = await postData("language/savelanguage", formData);
    if (result.result) {
      Swal.fire({
        icon: "success",
        title: "Language has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        icon: "fail",
        title: "Fail to submit language",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className={classes.root}>
      <style jsx>
        {`
          fieldset.MuiOutlinedInput-notchedOutline {
            border-color: white !important;
          }

          svg.MuiSelect-icon {
            color: white !important;
          }

          div.MuiOutlinedInput-input.MuiSelect-select {
            color: #fff !important;
          }
        `}
      </style>

      <div className={classes.subdiv}>
        <Grid container spacing={2}>
          <Grid item xs={12} style={{ fontSize: 20, fontWeight: "bold", color: "#FFF" }}>
            Add Language
          </Grid>
          <Grid item xs={6}>
            <CssTextField
              variant="outlined"
              InputLabelProps={{
                style: { color: "#FFF" },
              }}
              inputProps={{ style: { color: "#FFF" } }}
              label="Language"
              onChange={(event) => setLanguage(event.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <CssTextField
              variant="outlined"
              InputLabelProps={{
                style: { color: "#FFF" },
              }}
              inputProps={{ style: { color: "#FFF" } }}
              label="Region"
              onChange={(event) => setRegion(event.target.value)}
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid container mt={2} spacing={3}>
          <Grid item xs={5}>
            <Button
              onClick={() => handleSubmit()}
              style={{
                background: "#FFF",
                color: "#7ed6df",
                fontWeight: "bold",
              }}
              variant="contained"
              fullWidth
            >
              Submit
            </Button>
          </Grid>
          <Grid item xs={5}>
            <Button
              style={{
                background: "#FFF",
                color: "#7ed6df",
                fontWeight: "bold",
              }}
              variant="contained"
              fullWidth
            >
              Reset
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Courses;
